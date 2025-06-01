var express = require("express");
var router = express.Router();

var pilotosController = require("../controllers/pilotosController");

router.get("/bioPilotos/:piloto", function(req,res){
    pilotosController.bioPilotos(req,res);
})

module.exports = router;