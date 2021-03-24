const express = require("express");
const app = express();

const connect = require("./database/practiceQnsDb");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function server() {
  const err = await connect();
  err
    ? console.log("Db connection successful")
    : console.log("Db connection failed");
  app.listen(process.env.port, () => {
    console.log(
      `Example app listening at http://localhost:${process.env.port}`
    );
  });
}

module.exports = server;
