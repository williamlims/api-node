const express = require("express");
const router = express.Router();

// to accept request get
router.get("/", (req, res) => {
    console.log("Hello World!");
    res.send("Hello");
});

module.exports = router;