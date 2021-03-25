const PracticeQns = require("../models/practiceQns");

const getTopics = async (req, res) => {
  try {
    const topicDocs = await PracticeQns.find({});
    const response = topicDocs.map((topic) => ({
      name: topic.name,
      nQns: topic.questions.length,
      icon: topic.icon,
    }));
    res.status(200).json({ error: false, data: response });
  } catch (err) {
    res.status(400).json({ error: true, message: `${err}` });
  }
};

const getQuestions = async (req, res) => {
  try {
    const { topic } = req.params;
    const topicDoc = await PracticeQns.findOne({ name: topic });
    const response = topicDoc.questions.map(({ statement, _id, verified }) => ({
      statement,
      id: _id,
      verified,
    }));
    res.status(200).json({ error: false, data: response });
  } catch (err) {
    res.status(400).json({ error: true, message: `${err}` });
  }
};

const getAnswer = async (req, res) => {
  try {
    const { topic, questionId } = req.params;
    const topicDoc = await PracticeQns.findOne({ name: topic });
    const { explanation, source } = topicDoc.questions.find(
      ({ _id }) => questionId === String(_id)
    );
    const response = { explanation, source };
    res.status(200).json({ error: false, data: response });
  } catch (err) {
    res.status(400).json({ error: true, message: `${err}` });
  }
};

module.exports = { getTopics, getQuestions, getAnswer };
