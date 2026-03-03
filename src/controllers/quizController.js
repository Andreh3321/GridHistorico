var quizModel = require("../models/quizModel");

function Acertos(req, res) {
    console.log("👉 CHEGOU NO CONTROLLER: ", req.body);
    
    // Pegando os dados EXATAMENTE com os mesmos nomes que o Front-end envia
    var fkUsuario = req.body.fkUsuario;
    var pontuacao = req.body.pontuacao;

    // Validação simples
    if (fkUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("O número de acertos está undefined!");
    } else {
        // ATENÇÃO: Confirme se no seu arquivo quizModel.js a função se chama 'Acertos'
        quizModel.Acertos(fkUsuario, pontuacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log("\nHouve um erro ao realizar o insert no SQLite! Erro: ", erro);
                    res.status(500).json(erro);
                }
            );
    }
}

module.exports = {
    Acertos
}