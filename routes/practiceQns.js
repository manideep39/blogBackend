const express = require("express");
const router = express.Router();

const {
  getTopics,
  getQuestions,
  getAnswer,
  handleLikes,
} = require("../controllers/practiceQns.js");

router.get("/topics", getTopics);
router.get("/questions/:topicId", getQuestions);
router.get("/answer/:topicId/:questionId", getAnswer);
router.post("/like/:topicId/:questionId", handleLikes);

module.exports = router;
