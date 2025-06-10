var dashModel = require("../models/dashModel");

function melhores(req, res) {
    dashModel.melhores().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(204).send("Dados não encontrados")
        }
    })
        .catch(function (erro) {
            console.log(erro)
            console.log("Erro ao buscar os dados", erro.sqlMessage)
            res.status(500).json(erro.sqlMessage)
        })
}
module.exports = {
    melhores
}