const PracticeQns = require("../models/practiceQns");

const getTopics = async (req, res) => {
  try {
    const response = await PracticeQns.aggregate([
      {
        $project: { name: 1, nQns: { $size: "$questions" }, icon: 1 },
      },
    ]);
    res.status(200).json({ error: false, data: response });
  } catch (err) {
    res.status(400).json({ error: true, message: `${err}` });
  }
};

const getQuestions = async (req, res) => {
  try {
    const { topicId } = req.params;
    const topicDoc = await PracticeQns.findById(topicId);
    const response = topicDoc.questions.map(
      ({ statement, _id, verified, likes }) => ({
        statement,
        _id,
        verified,
        likes,
      })
    );
    res.status(200).json({ error: false, data: response });
  } catch (err) {
    res.status(400).json({ error: true, message: `${err}` });
  }
};

const getAnswer = async (req, res) => {
  try {
    const { topicId, questionId } = req.params;
    const topicDoc = await PracticeQns.findById(topicId);
    const { explanation, source, likes, bookmarks } = topicDoc.questions.find(
      ({ _id }) => questionId === String(_id)
    );
    const response = { explanation, source, likes, bookmarks };
    res.status(200).json({ error: false, data: response });
  } catch (err) {
    res.status(400).json({ error: true, message: `${err}` });
  }
};

const handleLikes = async (req, res) => {};

const handleBookmarks = async (req, res) => {};

module.exports = {
  getTopics,
  getQuestions,
  getAnswer,
  likeQn,
  handleBookmarks,
};
