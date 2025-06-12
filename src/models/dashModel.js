var database = require("../database/config")

function melhores() {
    var instrucaoSql = `select usuario.nome as Nome, resultado.numero_acertos as Acertos from usuario join resultado on idUsuario = fkUsuario order by Acertos desc limit 5; `;
    return database.executar(instrucaoSql)
}
module.exports = {
    melhores
}