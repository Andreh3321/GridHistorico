var db_pilotos = require("../database/config")

function bioPilotos(piloto){
    var instrucaoSQL = `select * from pilotos where nome = "${piloto}"`

    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return db_pilotos.executar(instrucaoSQL)
}

module.exports = {
    bioPilotos
};