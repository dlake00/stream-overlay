const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/overlay", (request, result) => {
    result.sendFile(path.join(__dirname, "./public/overlay.html"));
});

router.get("/splash", (request, result) => {
    result.sendFile(path.join(__dirname, "./public/splash.html"));
});

router.get("/admin", (request, result) => {
    result.sendFile(path.join(__dirname, "./public/admin.html"));
});

module.exports = router;