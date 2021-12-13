const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
const io = socketio(server);

// Namespaces
const ioAdmin = io.of("/admin");
const ioClient = io.of("/overlay");

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Set CORS

// Run when index connects
io.on("connection", socket => {
    console.log("connected: [ID: " + socket.id + ", type: index]")

    // Run when client disconnects
    socket.on("disconnect", reason => {
        console.log("disconnected: [ID: " + socket.id + ", type: index, reason: " + reason + "]")
    })
})

// Run when admin connects
ioAdmin.on("connection", socket => {
    console.log("connected: [ID: " + socket.id + ", type: admin]")

    // Run when client disconnects
    socket.on("disconnect", reason => {
        console.log("disconnected: [admin ID: " + socket.id + ", type: admin, reason: " + reason + "]")
    })
})

// Run when client connects
ioClient.on("connection", socket => {
    console.log("connected: [ID: " + socket.id + ", type: client]")

    // Run when client disconnects
    socket.on("disconnect", reason => {
        console.log("disconnected: [client ID: " + socket.id + ", type: client, reason: " + reason + "]")
    })
})

// URL handling
app.use(express.urlencoded({ extended: false }));
// Specify URL prefix and import routes
app.use("/", require("./routes"));

// Run server listen on PORT 3000
server.listen(PORT, () => console.log(`Server running on ${PORT}`));