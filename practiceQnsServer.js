const express = require("express");
const app = express();

const connect = require("./database/practiceQnsDb");
const practiceQns = require("./routes/practiceQns");

app.use("/practice", practiceQns);

async function server() {
  const err = await connect();
  err
    ? console.log("Db connection successful")
    : console.log("Db connection failed");
  app.listen(process.env.port, () => {
    console.log(`Server listening at http://localhost:${process.env.port}`);
  });
}

module.exports = server;
