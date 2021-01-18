const router = require("express").Router();
const db = require("../models");
const path = require("path");

// index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//exercise.html
router.get("/exercise", (req, res) => {
    console.log("Called!");
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

//stats.html
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;
