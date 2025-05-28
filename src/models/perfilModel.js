var database = require("../database/config")

function cadastrar(nome, email, senha){
    var instrucaoSql = `insert into usuario values (default, '${nome}', '${email}', '${senha}')`;
    return database.executar(instrucaoSql);
}

function checar_email(email){
    var instrucaoSql = `select * from usuario where email = '${email}'`;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    checar_email
}