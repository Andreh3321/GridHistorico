// var mysql = require("mysql2");

// // CONEXÃO DO BANCO MYSQL SERVER
// var mySqlConfig = {
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT
// };

// function executar(instrucao) {

//     if (process.env.AMBIENTE_PROCESSO !== "producao" && process.env.AMBIENTE_PROCESSO !== "desenvolvimento") {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM .env OU dev.env OU app.js\n");
//         return Promise.reject("AMBIENTE NÃO CONFIGURADO EM .env");
//     }

//     return new Promise(function (resolve, reject) {
//         var conexao = mysql.createConnection(mySqlConfig);
//         conexao.connect();
//         conexao.query(instrucao, function (erro, resultados) {
//             conexao.end();
//             if (erro) {
//                 reject(erro);
//             }
//             console.log(resultados);
//             resolve(resultados);
//         });
//         conexao.on('error', function (erro) {
//             return ("ERRO NO MySQL SERVER: ", erro.sqlMessage);
//         });
//     });
// }

// module.exports = {
//     executar
// };
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

// =============================================================================
// FUNÇÃO DE EXECUÇÃO: É a que o seu site usará para fazer Login, Cadastro, etc.
// =============================================================================
async function executar(instrucao) {
    try {
        const db = await open({
            // Cria o arquivo 'banco_dados.db' dentro da pasta src/database
            filename: path.resolve(__dirname, 'banco_dados.db'),
            driver: sqlite3.Database
        });

        // Executa o SQL vindo dos seus Models (insert, select, etc)
        const resultado = await db.all(instrucao);
        
        await db.close();
        return resultado;
    } catch (erro) {
        console.log("\n[ERRO DE SQL NO SQLITE]: ", erro);
        throw erro;
    }
}

// =============================================================================
// INICIALIZAÇÃO: Cria o arquivo e as tabelas assim que o VS Code rodar o projeto
// =============================================================================
async function inicializarBanco() {
    try {
        const db = await open({
            filename: path.resolve(__dirname, 'banco_dados.db'),
            driver: sqlite3.Database
        });

        // Tabela de Usuários (Ajustada para SQLite com INTEGER)
        await db.exec(`
            CREATE TABLE IF NOT EXISTS usuario (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT,
                email TEXT UNIQUE,
                senha TEXT
            );
        `);

        // Tabela de Quiz
        await db.exec(`
            CREATE TABLE IF NOT EXISTS resultado (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                fk_usuario INTEGER,
                pontuacao INTEGER,
                FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
            );
        `);

        console.log("✅ [DATABASE]: Tabelas verificadas/prontas no SQLite (VS Code)!");
        await db.close();
    } catch (erro) {
        console.log("\n[ERRO AO INICIALIZAR BANCO]: ", erro);
    }
}

// Chamar a inicialização para criar o arquivo .db automaticamente
inicializarBanco();

// Exportar para o restante do seu projeto
module.exports = {
    executar
};