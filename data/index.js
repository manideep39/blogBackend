let reactJtp = require("./javaTpointReact.json");
let androidJtp = require("./javaTpointAndroid.json");
let htmlJtp = require("./javaTpointHtml.json");
let cssJtp = require("./javaTpointCss.json");
let jsJtp = require("./javaTpointJs.json");
let mongodbJtp = require("./javaTpointMongoDB.json");
let nodejsJtp = require("./javaTpointNodeJs.json");

let jtp = [reactJtp, androidJtp, htmlJtp, cssJtp, jsJtp, mongodbJtp, nodejsJtp];

jtp = jtp.map((data) => {
  return data.questions.map((question) => {
    question.source = "https://www.javatpoint.com/";
    return question;
  });
});

const react = jtp[0];
const android = jtp[1];
const html = jtp[2];
const css = jtp[3];
const js = jtp[4];
const mongodb = jtp[5];
const nodejs = jtp[6];

module.exports = { react, android, html, css, js, mongodb, nodejs };
