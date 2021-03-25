const express = require("express");
const router = express.Router();

const {
  getTopics,
  getQuestions,
  getAnswer,
} = require("../controllers/getTopics");

const PracticeQns = require("../models/practiceQns");

router.get("/topics", getTopics);
router.get("/:topic/questions", getQuestions);
router.get("/:topic/:questionId/answer", getAnswer);

module.exports = router;
