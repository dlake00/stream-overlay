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
    console.log("Index ID: [" + socket.id + "] has connected")

    // Run when client disconnects
    socket.on("disconnect", reason => {
        console.log("Index ID: [" + socket.id + "] has disconnected")
    })
})

// Run when admin connects
ioAdmin.on("connection", socket => {
    console.log("Admin ID: [" + socket.id + "] has connected")

    // Run when client disconnects
    socket.on("disconnect", reason => {
        console.log("Admin ID: [" + socket.id + "] has disconnected")
    })
})

// Run when client connects
ioClient.on("connection", socket => {
    console.log("Client ID: [" + socket.id + "] has connected")

    // Run when client disconnects
    socket.on("disconnect", reason => {
        console.log("Client ID: [" + socket.id + "] has disconnected")
    })
})

// URL handling
app.use(express.urlencoded({ extended: false }));
// Specify URL prefix and import routes
app.use("/", require("./routes"));

// Run server listen on PORT 3000
server.listen(PORT, () => console.log(`Server running on ${PORT}`));