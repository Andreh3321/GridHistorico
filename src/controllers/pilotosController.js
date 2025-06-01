var pilotosModel = require("../models/pilotosModel");

function bioPilotos(req, res) {
    var piloto = req.params.piloto;

    pilotosModel.bioPilotos(piloto).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhuma informação encontrada")
        }
    })
        .catch(function (erro) {
            console.log(erro);
            console.log(`Houve um erro ao buscar as informações`, erro.sqlMessage);
            res.status(500).json(erro.sqlMessage)
        });

}
module.exports = {
    bioPilotos
}