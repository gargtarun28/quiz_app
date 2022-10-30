var express = require("express");
var router = express.Router();
const {
  saveQuiz,
  findQuiz,
  updateStatus,
  deleteQuiz,
} = require("../quiz/Controller");

router.post("/save", saveQuiz);
router.post("/find", findQuiz);
router.post("/update-status", updateStatus);
router.post("/delete", deleteQuiz);

module.exports = router;
