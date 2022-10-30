var express = require("express");
var router = express.Router();
const { save, result } = require("../score/controller");

router.post("/save", save);
router.post("/result", result);

module.exports = router;
