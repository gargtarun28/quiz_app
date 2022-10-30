var dotenv = require("dotenv");
var express = require("express");
var bodyParser = require("body-parser");
var { connectToDatabase } = require("./app/common/db");
const QuizRouter = require("./app/routes/quiz");
const ScoreRouter = require("./app/routes/score");
dotenv.config();

var port = process.env.PORT || "8000";

var app = express();

app.use(bodyParser.json());

app.use("/quiz", QuizRouter);
app.use("/score", ScoreRouter);

connectToDatabase()
  .then(() => {
    console.log("conected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`app started at http://localhost:${port}`);
});
