const PracticeQns = require('../models/practiceQns')
const UserProfile = require('../models/userProfile.js')

const getTopics = async (req, res) => {
  try {
    const response = await PracticeQns.aggregate([
      {
        $project: { name: 1, nQns: { $size: '$questions' }, icon: 1 }
      }
    ])
    res.status(200).json({ error: false, data: response })
  } catch (err) {
    res
      .status(400)
      .json({ error: true, message: `Couldn't get topics ${err}` })
  }
}

const getQuestions = async (req, res) => {
  try {
    const { topicId } = req.params
    const topicDoc = await PracticeQns.findById(topicId)
    const response = topicDoc.questions.map(
      ({ statement, _id, verified, likes }) => ({
        statement,
        _id,
        verified,
        likes
      })
    )
    res.status(200).json({ error: false, data: response })
  } catch (err) {
    res
      .status(400)
      .json({ error: true, message: `Couldn't get questions ${err}` })
  }
}

const getAnswer = async (req, res) => {
  try {
    const { topicId, questionId } = req.params
    const topicDoc = await PracticeQns.findById(topicId)
    const { explanation, source, likes, bookmarks } = topicDoc.questions.find(
      ({ _id }) => questionId === String(_id)
    )
    const response = { explanation, source, likes, bookmarks }
    res.status(200).json({ error: false, data: response })
  } catch (err) {
    res
      .status(400)
      .json({ error: true, message: `Couldn't get the answer ${err}` })
  }
}

const getProfile = async (req, res) => {
  try {
    const id = '456' // testing
    const response = await UserProfile.findOne({ user_id: id })
    res.status(200).json({ error: false, data: response })
  } catch (err) {
    res.status(400).json({ error: true, message: `${err}` })
  }
}

const handleProfile = async (req, res) => {
  try {
    const id = '789' // testing;
    if (!(await UserProfile.findOne({ user_id: id }))) {
      const newUser = new UserProfile({
        user_id: id,
        bookmarks: [],
        likes: []
      })
      newUser.save((err) => {
        if (err) res.status(400).json({ error: true, message: `${err}` })
        res.sendStatus(200)
      })
    }
  } catch (err) {
    res.status(400).json({ error: true, message: `${err}` })
  }
}

const handleLikeAndBookmarks = async (req, res) => {
  try {
    const path = req.path.split('/')[1]
    const { topicId, questionId } = req.params
    const id = '123' // for testing;
    if (
      !(await UserProfile.findOne({
        user_id: id,
        [path]: { $eq: questionId }
      }))
    ) {
      await UserProfile.update(
        { user_id: id },
        { $push: { [path]: questionId } }
      )
      await PracticeQns.update(
        {
          _id: topicId,
          'questions._id': questionId
        },
        {
          $inc: { [`questions.$.${path}`]: 1 }
        }
      )
    } else {
      await UserProfile.update(
        { user_id: id },
        { $pull: { [path]: questionId } }
      )
      await PracticeQns.update(
        {
          _id: topicId,
          'questions._id': questionId
        },
        {
          $inc: { [`questions.$.${path}`]: -1 }
        }
      )
    }
    res.sendStatus(200)
  } catch (err) {
    res.status(400).json({ error: false, message: `${err}` })
  }
}

module.exports = {
  getTopics,
  getQuestions,
  getAnswer,
  getProfile,
  handleLikeAndBookmarks,
  handleProfile
}
