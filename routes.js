const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/overlay", (request, result) => {
    result.sendFile(path.join(__dirname, "./public/overlay.html"));
});

router.get("/control", (request, result) => {
    result.sendFile(path.join(__dirname, "./public/control.html"));
});

module.exports = router;