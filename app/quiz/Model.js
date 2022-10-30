const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const QuizSchema = new Schema({
  name: String,
  questions: Array,
  created_by: String,
  created_at: { type: Number, default: Date.now() },
  status: String,
});

const QuizModel = mongoose.model("Quiz", QuizSchema, "quiz");

module.exports = { QuizModel };
