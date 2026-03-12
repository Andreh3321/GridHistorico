var sqlite3 = require('sqlite3').verbose();
var path = require('path');

// O __dirname pega a pasta atual (src/models). 
// O '../../' faz ele voltar duas pastas e entrar na pasta database.
// ATENÇÃO: Se a sua pasta database estiver DENTRO da pasta src, mude os '../../' para '../'
var caminhoBanco = path.resolve(__dirname, '../database/banco_dados.db');

console.log("Procurando o banco de dados no caminho absoluto:", caminhoBanco);

var db = new sqlite3.Database(caminhoBanco, function (erro) {
    if (erro) {
        console.error("Furo de pneu! Não consegui abrir o banco:", erro.message);
    } else {
        console.log("Conectado ao banco de dados com sucesso! 🏁");
    }
});

function buscarLendas() {
    // A Mágica do JOIN: Junta o piloto com os resultados onde ele ficou em 1º
    var instrucaoSql = `
        SELECT 
            p.driverId, 
            p.forename, 
            p.surname, 
            p.nationality,
            COUNT(r.resultId) as vitorias
        FROM piloto p
        LEFT JOIN resultados r ON p.driverId = r.driverId AND r.positionOrder = 1
        WHERE p.driverId IN (
            1, 2, 3, 4, 5, 8, 13, 14, 18, 20, 22, 30, 31, 44, 57, 58, 67, 95, 102, 117, 
            137, 151, 154, 155, 163, 178, 182, 199, 202, 204, 287, 328, 822, 830
        )
        GROUP BY p.driverId, p.forename, p.surname, p.nationality
        HAVING vitorias > 0 OR p.surname IN ('Massa', 'Barrichello')
        ORDER BY vitorias DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return new Promise(function (resolve, reject) {
        db.all(instrucaoSql, [], function (erro, resultado) {
            if (erro) {
                reject(erro);
            } else {
                resolve(resultado);
            }
        });
    });
}

module.exports = {
    buscarLendas
};

module.exports = {
    buscarLendas
};