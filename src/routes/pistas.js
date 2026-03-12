var express = require("express");
var router = express.Router();

// Importamos o controller que você criou
var pistaController = require("../controllers/pistaController");

// Definimos que quando o navegador pedir "/listar", chamamos a função do controller
router.get("/listar", function (req, res) {
    pistaController.listar(req, res);
});

module.exports = router;