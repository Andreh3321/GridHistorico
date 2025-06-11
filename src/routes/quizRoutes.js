var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/Acertos", function (req, res) {
    quizController.Acertos(req, res);
})

module.exports = router;