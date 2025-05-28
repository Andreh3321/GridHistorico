var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController")

router.post("/cadastrar", function (req, res){
    perfilController.cadastrar(req,res)
});

router.get("/checar_email/:email", function (req,res){
    perfilController.checar_email(req,res)
});

module.exports = router;