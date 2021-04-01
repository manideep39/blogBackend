const express = require('express')
const app = express()

const connect = require('./database/practiceQnsDb')
const practiceQns = require('./routes/practiceQns')

app.use('/practice', practiceQns)

async function server () {
  try {
    const err = await connect()
    app.listen(process.env.port, () => {
      console.log(`Server listening at http://localhost:${process.env.port}`)
    })
  } catch (err) {
    console.log('Db connection failed', err)
  }
}

module.exports = server
