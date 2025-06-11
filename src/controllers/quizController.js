var quizModel = require("../models/quizModel");

function Acertos(req, res) {
   
    var fkUsuario = req.body.fkUsuario;
    var fkQuiz = req.body.fkQuiz;
    var acertos = req.body.acertos;

        quizModel.Acertos(fkUsuario, fkQuiz, acertos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o insert! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    Acertos
}
