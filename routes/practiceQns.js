const express = require("express");
const router = express.Router();

const {
  getTopics,
  getQuestions,
  getAnswer,
  handleLikeAndBookmarks,
} = require("../controllers/practiceQns.js");

router.get("/topics", getTopics);
router.get("/questions/:topicId", getQuestions);
router.get("/answer/:topicId/:questionId", getAnswer);
router.post("/likes/:topicId/:questionId", handleLikeAndBookmarks);
router.post("/bookmarks/:topicId/:questionId", handleLikeAndBookmarks);

module.exports = router;
