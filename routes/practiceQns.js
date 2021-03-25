const express = require("express");
const router = express.Router();

const { getTopics } = require("../controllers/getTopics");

const PracticeQns = require("../models/practiceQns");

router.get("/topics", getTopics);

module.exports = router;
