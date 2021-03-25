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

module.exports = { getTopics };
