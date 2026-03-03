var database = require("../database/config");

function Acertos(fk_usuario, acertos) {
    // Note que removi o fkQuiz para simplificar, 
    // já que no nosso CREATE TABLE do config.js só definimos fk_usuario e pontuacao.
    
    var instrucaoSql = `
        INSERT INTO resultado (fk_usuario, pontuacao) 
        VALUES (${fk_usuario}, ${acertos});
    `;
    
    console.log("Executando a instrução SQL no SQLite: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    Acertos
};