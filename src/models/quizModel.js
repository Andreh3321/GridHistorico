var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function Acertos(fkUsuario, fkQuiz, acertos) {
    console.log(fkUsuario, fkQuiz, acertos);
    
    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario, fkQuiz, numero_acertos) VALUES ('${fkUsuario}', '${fkQuiz}', '${numero_acertos}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    Acertos
};
