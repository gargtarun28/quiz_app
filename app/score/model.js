const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const scoreSchema = new Schema({
  user_id: String,
  quiz_id: String,
  score: Array,
  submitted_at: { type: Number, default: Date.now() },
});

const ScoreModel = mongoose.model("Score", scoreSchema, "score");

module.exports = { ScoreModel };
