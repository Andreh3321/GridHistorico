var express = require("express");
var router = express.Router();
var pilotoController = require("../controllers/pilotoController");

router.get("/lendas", function (req, res) {
    pilotoController.buscarLendas(req, res);
});

module.exports = router;