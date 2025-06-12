const $startquiz = document.querySelector(".start")
const container_pergunta = document.querySelector(".container_pergunta")
const respostas_quiz = document.querySelector(".respostas_quiz")
const perguntas_quiz = document.querySelector(".perguntas_quiz")
const next = document.querySelector(".next")

$startquiz.addEventListener("click", iniciar)
next.addEventListener("click", displayProximaPergunta)

let pergunta_atual = 0;
let respostas_certas = 0;


const lista_perguntas = [
    {
        pergunta: "Onde foi sediada a primeira corrida da história?",
        respostas: [
            { text: "Silverstone", correta: true },
            { text: "Interlagos", correta: false },
            { text: "Spa-Francorchamps", correta: false },
            { text: "Monaco", correta: false }
        ]
    },
    {
        pergunta: "Em qual data ocorreu a primeira corrida da F1?",
        respostas: [
            { text: "11/06/1943", correta: false },
            { text: "13/05/1950", correta: true },
            { text: "01/02/1972", correta: false },
            { text: "03/07/1947", correta: false }
        ]
    },
    {
        pergunta: "Em que ano Senna ganhou seu primeiro título?",
        respostas: [
            { text: "1994", correta: false },
            { text: "1981", correta: false },
            { text: "1988", correta: true },
            { text: "1986", correta: false }
        ]
    },
    {
        pergunta: "Qual o pneu de faixa verde?",
        respostas: [
            { text: "Intermediário", correta: true },
            { text: "Chuva", correta: false },
            { text: "Macio", correta: false },
            { text: "Duro", correta: false }
        ]
    },
    {
        pergunta: "Em qual decada Schumacher fez sua hegemonia?",
        respostas: [
            { text: "1950-1959", correta: true },
            { text: "1980-1989", correta: false },
            { text: "1990-1999", correta: false },
            { text: "2000-2009", correta: false }
        ]
    },
    {
        pergunta: "Quando foi o primeiro título de Verstappen e por qual equipe?",
        respostas: [
            { text: "2020 - Ferrari", correta: false },
            { text: "2021 - McLaren", correta: false },
            { text: "2024 - Mercedes", correta: false },
            { text: "2021 - RedBull", correta: true }
        ]
    },
    {
        pergunta: "Em qual data ocorreu a primeira corrida da F1?",
        respostas: [
            { text: "13/05/1950", correta: true },
            { text: "11/06/1943", correta: false },
            { text: "01/02/1972", correta: false },
            { text: "03/07/1947", correta: false }
        ]
    },
    {
        pergunta: "Em qual data ocorreu a primeira corrida da F1?",
        respostas: [
            { text: "13/05/1950", correta: true },
            { text: "11/06/1943", correta: false },
            { text: "01/02/1972", correta: false },
            { text: "03/07/1947", correta: false }
        ]
    },
    {
        pergunta: "Em qual data ocorreu a primeira corrida da F1?",
        respostas: [
            { text: "13/05/1950", correta: true },
            { text: "11/06/1943", correta: false },
            { text: "01/02/1972", correta: false },
            { text: "03/07/1947", correta: false }
        ]
    },
    {
        pergunta: "Em qual data ocorreu a primeira corrida da F1?",
        respostas: [
            { text: "13/05/1950", correta: true },
            { text: "11/06/1943", correta: false },
            { text: "01/02/1972", correta: false },
            { text: "03/07/1947", correta: false }
        ]
    }
]


function iniciar() {
    $startquiz.classList.add("hide")
    container_pergunta.classList.remove("hide")
    displayProximaPergunta()
}

function displayProximaPergunta() {
    resetar()

    if (lista_perguntas.length == pergunta_atual) {
        return finalizarQuiz()
    }

    perguntas_quiz.textContent = lista_perguntas[pergunta_atual].pergunta
    lista_perguntas[pergunta_atual].respostas.forEach(resposta => {
        const novaResposta = document.createElement("button")
        novaResposta.classList.add("button", "resposta")
        novaResposta.textContent = resposta.text
        if (resposta.correta) {
            novaResposta.dataset.correta = resposta.correta
        }
        respostas_quiz.appendChild(novaResposta)

        novaResposta.addEventListener("click", selecionarResposta)
    })
}

function resetar() {
    while (respostas_quiz.firstChild) {
        respostas_quiz.removeChild(respostas_quiz.firstChild)
    }

    document.body.removeAttribute("class")
    next.classList.add("hide")

}

function selecionarResposta(event) {
    const respostaSelecionada = event.target

    if (respostaSelecionada.dataset.correta) {
        document.body.classList.add("correta")
        respostas_certas++;
    } else {
        document.body.classList.add("errada")
    }

    document.querySelectorAll(".resposta").forEach(button => {
        if (button.dataset.correta) {
            button.classList.add("certa")
        } else {
            button.classList.add("errou")
        }

        button.disabled = true
    })

    next.classList.remove("hide")
    pergunta_atual++;
}

function finalizarQuiz() {
    const total_questoes = lista_perguntas.length;
    const resultado = Math.floor(respostas_certas * 100 / total_questoes)

    let mensagem = ``;

    if (resultado == 100) {
        mensagem = `Estudou bastante, hein? Você é o Sebastian Vettel do Quiz!`
    } else if (resultado >= 90) {
        mensagem = `Impressionante! Você é o Ayrton Senna do Quiz!`
    } else if (resultado >= 80) {
        mensagem = `Uau! Lewis Hamilton? É você?`
    } else if (resultado >= 70) {
        mensagem = `Max Verstappen está ganhando discípulos!`
    } else if (resultado >= 60) {
        mensagem = `Schumacher está sendo bem representado!`
    } else if (resultado >= 50) {
        mensagem = `Alonso está pedindo para você estudar um pouco mais`
    } else if (resultado < 50 && resultado >= 30) {
        mensagem = `Bortoleto está triste pois você estudou pouco`
    } else if (resultado >= 10) {
        mensagem = `Nicholas Latifi está orgulhoso....`
    } else {
        mensagem = `Você é o Mazepin do Quiz`
    }

    container_pergunta.innerHTML =
        `
    <p>
    Você acertou ${respostas_certas} de ${total_questoes} perguntas, ou seja, ${resultado}% do quiz
    </p>
    <span>
    Resultado: ${mensagem}
    </span>
    <button onclick=window.location.reload() class="button">
    Refazer o Quiz
    </button>
    `
}

function acertos() {
        fetch("/quiz/Acertos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ // envia os dados nessa ordem de estruta JSON

            fkUsuario: idUsuario,
            fkQuiz: fkQuiz,
            acertos: pontuacaoFinal

            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

            })
            .catch(function (resposta) { 
                console.log(`#ERRO: ${resposta}`);
            });
    }





