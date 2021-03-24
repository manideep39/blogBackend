const mongoose = require("mongoose");
const PracticeQns = require("../models/practiceQns");
const {
  react,
  android,
  html,
  css,
  js,
  mongodb,
  nodejs,
} = require("../data/index");

mongoose.connect(
  "mongodb+srv://manideep39:cZ0OJ3n6bu0PnYrs@quiz.rqu1b.mongodb.net/practiceQns?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

function dumpData(language, data) {
  const practiceQns = new PracticeQns({
    name: language,
    icon: " ",
    questions: [...data],
  });
  practiceQns.save((err, question) => {
    if (err) return console.error(err);
    console.log(`Success ${language}`);
  });
}

dumpData("REACT", react);
dumpData("JAVASCRIPT", js);
dumpData("CSS", css);
dumpData("HTML", html);
dumpData("NODE_JS", nodejs);
dumpData("MONGO_DB", mongodb);
dumpData("ANDROID", android);
