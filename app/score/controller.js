const { ScoreModel } = require("./Model");

const save = async (req, res) => {
  let data = req.body;
  const score = new ScoreModel(data);
  try {
    let result = await score.save();
    return res.send({
      status: 1,
      message: "Score saved successfully",
      data: result,
    });
  } catch (err) {
    return res.send({ status: 0, message: "something went wrong", data: [] });
  }
};

const result = async (req, res) => {
  let { user_id } = req.body;

  let result = await ScoreModel.aggregate([
    { $match: { user_id: user_id } },
    { $group: { _id: "$quiz_id", count: { $sum: 1 } } },
  ]);

  res.send({
    status: 1,
    message: "User Score",
    data: { attempt: result },
  });
};

module.exports = { save, result };
