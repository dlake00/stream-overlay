/* INITIALISE CONSTANTS */
const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const io = socketio(server);

/* NAMESPACES */
const admin = io.of("/admin");
const overlay = io.of("/overlay");
const splash = io.of("/splash");

/* SET STATIC FOLDER */
app.use(express.static(path.join(__dirname, "public")));

/* SET CORS */

/* FUNCTIONS */

/**
 * Returns array of all OVERLAY sockets and emit to MANAGER
 * @returns None
 */
function getOverlayArr() {
    var overlayIDs = Array.from(io.of("/overlay").sockets.keys());
    var overlayCount = overlayIDs.length;
    io.of("/admin").emit("overlay-list", overlayIDs, overlayCount);
    return;
}

/**
 * Get array of all SPLASH sockets and emit to MANAGER
 * @returns None
 */
function getSplashArr() {
    var splashIDs = Array.from(io.of("/splash").sockets.keys());
    var splashCount = splashIDs.length;
    io.of("/admin").emit("splash-list", splashIDs, splashCount)
    return;
}

/* SOCKET CONNECTION HANDLING */

// Run when index connects
io.on("connection", socket => {
    console.log("connected: [ID: " + socket.id + ", type: index]")

    // Run when index disconnects
    socket.on("disconnect", reason => {
        console.log("disconnected: [ID: " + socket.id + ", type: index, reason: " + reason + "]")
    })
})

// Run when admin connects
admin.on("connection", socket => {
    console.log("connected: [ID: " + socket.id + ", type: admin]")

    getOverlayArr();
    getSplashArr();

    // Run when admin disconnects
    socket.on("disconnect", reason => {
        console.log("disconnected: [ID: " + socket.id + ", type: admin, reason: " + reason + "]")
    })
})

// Run when overlay connects
overlay.on("connection", socket => {
    console.log("connected: [ID: " + socket.id + ", type: overlay]")

    getOverlayArr();

    // Run when overlay disconnects
    socket.on("disconnect", reason => {
        console.log("disconnected: [ID: " + socket.id + ", type: overlay, reason: " + reason + "]")
        getOverlayArr();
    })
})

// Run when splash connects
splash.on("connection", socket => {
    console.log("connected: [ID: " + socket.id + ", type: splash]")

    getSplashArr();

    // Run when splash disconnects
    socket.on("disconnect", reason => {
        console.log("disconnected: [ID: " + socket.id + ", type: splash, reason: " + reason + "]")
        getSplashArr();
    })
})

/* URL HANDLING */
app.use(express.urlencoded({ extended: false }));

/* SPECIFY URL PREFIX AND IMPORT ROUTES */
app.use("/", require("./routes"));

/* RUN SERVER LISTEN ON PORT 3000 */
server.listen(PORT, () => console.log(`Server running on ${PORT}`));