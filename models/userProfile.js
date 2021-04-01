const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = Schema({
  user_id: {
    type: String,
    required: true
  },
  bookmarks: [],
  likes: []
})

const UserProfile = mongoose.model('UserProfiles', UserSchema)

module.exports = UserProfile
