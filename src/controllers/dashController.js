var dashModel = require("../models/dashModel");

function melhores(req, res) {
    dashModel.melhores()

        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\n Houve um erro ao buscar a resposta da questao! Erro: "
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}
module.exports = {
    melhores
}