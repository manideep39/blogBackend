const mongoose = require('mongoose')
const UserProfile = require('../models/userProfile.js')

mongoose.connect(
  'mongodb+srv://manideep39:cZ0OJ3n6bu0PnYrs@quiz.rqu1b.mongodb.net/practiceQns?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

async function saveUser (dummyId) {
  try {
    const newUser = new UserProfile({
      user_id: dummyId,
      bookmarks: [],
      likes: []
    })
    newUser.save((err) => {
      if (err) return console.log(err)
      db.close()
    })
  } catch (err) {
    console.log(`User not created ${err}`)
  }
}

saveUser('123')
