var perfilModel = require("../models/perfilModel");

function cadastrar(req,res){
    var nome = req.body.nomeServer
    var email = req.body.emailServer
    var senha = req.body.senhaServer
    if(nome == undefined){
        res.status(400).send("Seu nome está indefinido");
    } else if (email == undefined){
        res.status(400).send("Seu email está indefinido");
    } else if(senha == undefined){
        res.status(400).send("Sua senha está indefinida");
    } else {
        perfilModel.cadastrar(nome, email, senha)
        .then(resultado=> {
            res.json(resultado)
            console.log(`Cadastro realizado com sucesso!`)
        })
        .catch(erro=>{
            console.log(erro);
            console.log(
                "\nErro ao realizar cadastro! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage)
        })
    }
}

function checar_email(req,res){
    var email = req.params.email
    if (email == undefined){
        res.status(400).send("email indedinido") 
    } else {
        perfilModel.checar_email(email)
        .then(resposta=>{
            console.log("Email verificado")
            console.log(resposta)
            res.json(resposta)
        })
        .catch(erro => {
            console.log(erro)
            res(500).json(erro.sqlMessage)
        })
    }
}

module.exports = {
    cadastrar,
    checar_email
}