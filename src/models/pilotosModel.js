var db_pilotos = require("../database/config")

function bioPilotos(idPiloto){
    var instrucaoSQL = `select * from pilotos where idPiloto = ${Number(idPiloto)}`

    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return db_pilotos.executar(instrucaoSQL)
}

module.exports = {
    bioPilotos
};