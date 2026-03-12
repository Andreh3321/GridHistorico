var sqlite3 = require('sqlite3').verbose();
var path = require('path');

var caminhoBanco = path.resolve(__dirname, '../database/banco_dados.db');
var db = new sqlite3.Database(caminhoBanco);

function listarCircuitos() {
    // Buscamos o nome, a cidade (location) e o país de todos os circuitos
    var instrucaoSql = `
        SELECT 
            circuitId, 
            name, 
            location, 
            country,
            url
        FROM circuits
        ORDER BY country ASC;
    `;

    return new Promise(function(resolve, reject) {
        db.all(instrucaoSql, [], (erro, resultado) => {
            if (erro) reject(erro);
            else resolve(resultado);
        });
    });
}

module.exports = { listarCircuitos };