const express = require("express");
const router = express.Router();

const {
  getTopics,
  getQuestions,
  getAnswer,
  handleLikes,
  handleBookmarks,
} = require("../controllers/getTopics");

const PracticeQns = require("../models/practiceQns");

router.get("/topics", getTopics);
router.get("/questions/:topicId", getQuestions);
router.get("/answer/:topicId/:questionId", getAnswer);
router.post("/likes/:topicId/:questionId", handleLikes);
router.post("/bookmarks/:topicId/:questionId", handleBookmarks);

module.exports = router;
