var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController")

router.get("/melhores", function(req,res){
    dashController.melhores(req,res)
})

module.exports = router
