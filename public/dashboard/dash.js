async function melhores() {
    const resposta = await fetch(`/dashRoutes/melhores`)
        .then((resultado) => {
            resultado.json()
                .then((json) => {
                    primeiro = json[0]
                    segundo = json[1]
                    terceiro = json[2]
                    quarto = json[3]
                    quinto = json[4]

                    const grafico = document.getElementById("maiores_pontuadores")

                    new Chart(grafico, {
                        type: "bar",
                        data: {
                            labels: ["Andre", "Diogo", "Ana", "Ruben", "Raquel"],
                            datasets: [{
                                label: "pontuação",
                                data: [10, 9, 8, 7, 6],
                                backgroundColor: ["#e3b062", "#c9c9c9", "#8c8c8c", "#5e5e5e", "#2d2d2d"],
                                borderColor: "#000000",
                                borderWidth: 1
                            }]
                        },
                        options: {
                            plugins: {
                                legend: {
                                    position: "left",
                                    labels: {
                                        color: "#e3b062",
                                        font: {
                                            size: 20,
                                            weight: "regular"
                                        }
                                    }
                                }
                            }
                        }
                    });



                    primeiro_lugar.innerHTML = `1° ${primeiro.nome}`
                    segundo_lugar.innerHTML = `2° ${segundo.nome}`
                    terceiro_lugar.innerHTML = `3° ${terceiro.nome}`
                })
        })
        .catch((erro) => {
            console.log(erro)
        })
}


