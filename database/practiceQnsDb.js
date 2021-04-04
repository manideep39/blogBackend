const mongoose = require('mongoose')

function connect (params) {
  return mongoose.connect(process.env.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = connect
