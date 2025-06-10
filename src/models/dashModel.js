var database = require("../database/config")

function melhores() {
    var instrucaoSql = `select `;
    return database.executar(instrucaoSql)
}
module.exports = {
    melhores
}