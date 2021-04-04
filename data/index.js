const reactJtp = require('./javaTpointReact.json')
const androidJtp = require('./javaTpointAndroid.json')
const htmlJtp = require('./javaTpointHtml.json')
const cssJtp = require('./javaTpointCss.json')
const jsJtp = require('./javaTpointJs.json')
const mongodbJtp = require('./javaTpointMongoDB.json')
const nodejsJtp = require('./javaTpointNodeJs.json')

let jtp = [reactJtp, androidJtp, htmlJtp, cssJtp, jsJtp, mongodbJtp, nodejsJtp]

jtp = jtp.map((data) => {
  return data.questions.map((question) => {
    question.source = 'https://www.javatpoint.com/'
    return question
  })
})

const react = jtp[0]
const android = jtp[1]
const html = jtp[2]
const css = jtp[3]
const js = jtp[4]
const mongodb = jtp[5]
const nodejs = jtp[6]

module.exports = { react, android, html, css, js, mongodb, nodejs }
