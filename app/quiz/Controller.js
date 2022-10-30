const { QuizModel } = require("./Model");

const saveQuiz = async (req, res) => {
  let data = req.body;
  if (!data.questions.length) {
    return res.send({
      status: 0,
      message: "Quiz must contain at least 1 question",
    });
  }
  for (let val of data.questions) {
    if (!val.question.trim().length) {
      return res.send({
        status: 0,
        message: "some questions have a empty value",
      });
    }
    if (!val.options.length) {
      return res.send({
        status: 0,
        message: "options can not be empty",
      });
    }
    if (!val.answer.trim().length) {
      return res.send({
        status: 0,
        message: "answer can not be empty",
      });
    }
  }

  const quiz = new QuizModel(data);
  try {
    let result = await quiz.save();
    return res.send({
      status: 1,
      message: "Quiz saved successfully",
      data: result,
    });
  } catch (err) {
    return res.send({ status: 0, message: "something went wrong", data: [] });
  }
};

const findQuiz = async (req, res) => {
  let { id, status } = req.body;
  let data = {};
  if (id) data._id = id;
  if (status) data.status = status;
  try {
    let result = await QuizModel.find(data);
    if (result.length) {
      res.send({ status: 1, message: "Quiz list", data: result });
    } else {
      res.send({ status: 1, message: "No Data found", data: result });
    }
  } catch (err) {
    res.send({ status: 0, message: "something went wrong", data: [] });
  }
};

const updateStatus = async (req, res) => {
  let { id, status } = req.body;
  try {
    let result = await QuizModel.updateOne({ _id: id }, { status: status });
    res.send({ status: 1, message: "Quiz status updated", data: result });
  } catch (err) {
    res.send({ status: 0, message: "something went wrong", data: [] });
  }
};

const deleteQuiz = async (req, res) => {
  let { id } = req.body;
  try {
    let result = await QuizModel.deleteOne({ _id: id });
    res.send({ status: 1, message: "Quiz deleted", data: result });
  } catch (err) {
    res.send({ status: 0, message: "something went wrong", data: [] });
  }
};

module.exports = { saveQuiz, findQuiz, updateStatus, deleteQuiz };
