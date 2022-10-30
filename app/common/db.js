var mongoose = require("mongoose");

var connectToDatabase = async () => {
  return new Promise((resolve, reject) => {
    let urlString = `mongodb+srv://admin:admin123@quiz.t77ught.mongodb.net/quiz_app`;
    mongoose
      .connect(urlString)
      .then(() => {
        console.log("Connected to MongoDB");
        resolve(true);
      })
      .catch((er) => {
        console.log("Somthing wrong...", er);
        reject(false);
      });
  });
};

module.exports = { connectToDatabase };
