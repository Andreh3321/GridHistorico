var database = require("../database/config");

function melhores() {
    // Ajustei para 'usuario.id' e garanti que os nomes batam com o seu config.js
    var instrucaoSql = `
        SELECT 
            u.nome AS Nome, 
            r.pontuacao AS Acertos 
        FROM usuario AS u
        JOIN resultado AS r ON u.id = r.fk_usuario 
        ORDER BY Acertos DESC 
        LIMIT 5;
    `;
    console.log("Executando consulta de Ranking no SQLite: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMediaAcertos() {
    var instrucaoSql = `
        SELECT 
            u.nome AS Nome, 
            AVG(r.pontuacao) AS Media 
        FROM usuario AS u
        JOIN resultado AS r ON u.id = r.fk_usuario 
        GROUP BY u.id 
        ORDER BY Media DESC;
    `;
    console.log("Buscando média no SQLite (GridHistorico): \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    melhores,
    buscarMediaAcertos
};