function buscarLendas(req, res) {
    const hallDaFama = [
        { nome: "Giuseppe", sobrenome: "Farina", pais: "Itália", vitorias: 5, titulos: 1, descricao: "O primeiro campeão da história da F1 (1950). Conhecido pelo estilo de pilotagem relaxado e braços esticados." },
        { nome: "Juan Manuel", sobrenome: "Fangio", pais: "Argentina", vitorias: 24, titulos: 5, descricao: "O Maestro. Ganhou 5 títulos por 4 equipes diferentes. Um domínio técnico absurdo nos anos 50." },
        { nome: "Alberto", sobrenome: "Ascari", pais: "Itália", vitorias: 13, titulos: 2, descricao: "O maior campeão italiano da Ferrari. Dono de um recorde de 7 vitórias consecutivas que durou décadas." },
        { nome: "Mike", sobrenome: "Hawthorn", pais: "Reino Unido", vitorias: 3, titulos: 1, descricao: "O primeiro campeão britânico. Ficou famoso por pilotar usando uma gravata borboleta e sua elegância nas pistas." },
        { nome: "Jack", sobrenome: "Brabham", pais: "Austrália", vitorias: 14, titulos: 3, descricao: "Único piloto na história a vencer um campeonato mundial dirigindo um carro construído por ele mesmo." },
        { nome: "Phil", sobrenome: "Hill", pais: "EUA", vitorias: 3, titulos: 1, descricao: "O primeiro americano campeão. Conquistou o título em 1961 em uma temporada marcada pela tragédia na Ferrari." },
        { nome: "Graham", sobrenome: "Hill", pais: "Reino Unido", vitorias: 14, titulos: 2, descricao: "O 'Mr. Mônaco'. Único piloto a conquistar a Tríplice Coroa: F1, 24h de Le Mans e as 500 Milhas de Indianápolis." },
        { nome: "Jim", sobrenome: "Clark", pais: "Reino Unido", vitorias: 25, titulos: 2, descricao: "Considerado um dos gênios mais puros do esporte. Dominava qualquer carro com uma suavidade lendária na Lotus." },
        { nome: "John", sobrenome: "Surtees", pais: "Reino Unido", vitorias: 6, titulos: 1, descricao: "Uma lenda das duas e quatro rodas. Único homem a ser campeão mundial de Motovelocidade e de Fórmula 1." },
        { nome: "Denny", sobrenome: "Hulme", pais: "Nova Zelândia", vitorias: 8, titulos: 1, descricao: "O 'Urso' da Nova Zelândia. Campeão de 1967, era conhecido pela força física e resistência nas corridas." },
        { nome: "Jackie", sobrenome: "Stewart", pais: "Reino Unido", vitorias: 27, titulos: 3, descricao: "O 'Escocês Voador'. Além dos títulos, foi o maior defensor da segurança moderna que salvou inúmeras vidas na F1." },
        { nome: "Jochen", sobrenome: "Rindt", pais: "Áustria", vitorias: 6, titulos: 1, descricao: "O único campeão póstumo da história. Um piloto extremamente veloz que dominou a temporada de 1970." },
        { nome: "Emerson", sobrenome: "Fittipaldi", pais: "Brasil", vitorias: 14, titulos: 2, descricao: "O Rato. O primeiro brasileiro campeão mundial, abrindo as portas do automobilismo para o nosso país." },
        { nome: "James", sobrenome: "Hunt", pais: "Reino Unido", vitorias: 10, titulos: 1, descricao: "O 'Rockstar' das pistas. Protagonizou com Niki Lauda a maior rivalidade da história da F1 em 1976." },
        { nome: "Mario", sobrenome: "Andretti", pais: "EUA", vitorias: 12, titulos: 1, descricao: "Ícone global. Campeão de 1978 com o revolucionário 'carro-asa' da Lotus, unindo técnica e inovação." },
        { nome: "Jody", sobrenome: "Scheckter", pais: "África do Sul", vitorias: 10, titulos: 1, descricao: "O único africano campeão da F1. Levou a Ferrari ao título de 1979 com uma pilotagem cerebral." },
        { nome: "Alan", sobrenome: "Jones", pais: "Austrália", vitorias: 12, titulos: 1, descricao: "O primeiro campeão da equipe Williams (1980). Conhecido pela agressividade e honestidade brutal." },
        { nome: "Nelson", sobrenome: "Piquet", pais: "Brasil", vitorias: 23, titulos: 3, descricao: "Gênio da mecânica e estratégia. Tri-campeão com motores diferentes, mestre em ajustar o carro para vencer." },
        { nome: "Keke", sobrenome: "Rosberg", pais: "Finlândia", vitorias: 5, titulos: 1, descricao: "O primeiro 'Finlandês Voador'. Campeão de 1982 com um estilo de pilotagem espetacular e agressivo." },
        { nome: "Niki", sobrenome: "Lauda", pais: "Áustria", vitorias: 25, titulos: 3, descricao: "Símbolo de superação. Voltou a correr semanas após um grave acidente e venceu títulos pela Ferrari e McLaren." },
        { nome: "Alain", sobrenome: "Prost", pais: "França", vitorias: 51, titulos: 4, descricao: "O Professor. Mestre da estratégia e economia de pneus, venceu 4 títulos com inteligência tática inigualável." },
        { nome: "Ayrton", sobrenome: "Senna", pais: "Brasil", vitorias: 41, titulos: 3, descricao: "Mestre da chuva e das poles. Considerado por muitos o piloto mais veloz e carismático que já existiu." },
        { nome: "Nigel", sobrenome: "Mansell", pais: "Reino Unido", vitorias: 31, titulos: 1, descricao: "O 'Leão'. Pilotava com o coração e conquistou o título de 1992 com um domínio tecnológico histórico." },
        { nome: "Michael", sobrenome: "Schumacher", pais: "Alemanha", vitorias: 91, titulos: 7, descricao: "O Kaiser. Elevou o nível de preparo físico e profissionalismo da F1 a um novo patamar na era Ferrari." },
        { nome: "Damon", sobrenome: "Hill", pais: "Reino Unido", vitorias: 22, titulos: 1, descricao: "Superou a pressão de ser filho de uma lenda para conquistar seu próprio título mundial em 1996." },
        { nome: "Jacques", sobrenome: "Villeneuve", pais: "Canadá", vitorias: 11, titulos: 1, descricao: "Filho do lendário Gilles Villeneuve, venceu o campeonato de 1997 em um duelo épico contra Schumacher." },
        { nome: "Mika", sobrenome: "Hakkinen", pais: "Finlândia", vitorias: 20, titulos: 2, descricao: "O maior rival de Schumacher. Bicampeão pela McLaren, famoso pelo silêncio e pela velocidade extrema." },
        { nome: "Fernando", sobrenome: "Alonso", pais: "Espanha", vitorias: 32, titulos: 2, descricao: "O príncipe das Astúrias. Encerrou o reinado de Schumacher e provou ser um dos pilotos mais completos da história." },
        { nome: "Kimi", sobrenome: "Raikkonen", pais: "Finlândia", vitorias: 21, titulos: 1, descricao: "O 'Iceman'. Campeão em 2007, é amado pelo estilo 'não me importo' e por sua habilidade técnica pura." },
        { nome: "Lewis", sobrenome: "Hamilton", pais: "Reino Unido", vitorias: 105, titulos: 7, descricao: "O maior recordista de vitórias e poles. Uma lenda viva que transcendeu o esporte e a cultura global." },
        { nome: "Jenson", sobrenome: "Button", pais: "Reino Unido", vitorias: 15, titulos: 1, descricao: "Venceu em 2009 com a surpreendente Brawn GP. Conhecido pela suavidade ao guiar em pistas molhadas." },
        { nome: "Sebastian", sobrenome: "Vettel", pais: "Alemanha", vitorias: 53, titulos: 4, descricao: "O prodígio da Red Bull. Dominou o início dos anos 2010 com quatro títulos consecutivos e muita técnica." },
        { nome: "Nico", sobrenome: "Rosberg", pais: "Alemanha", vitorias: 23, titulos: 1, descricao: "Superou Hamilton em 2016 com uma força mental absurda e se aposentou no topo do mundo." },
        { nome: "Max", sobrenome: "Verstappen", pais: "Países Baixos", vitorias: 62, titulos: 4, descricao: "O fenômeno atual. Quebrou todos os recordes de precocidade e estabeleceu um novo padrão de dominância." },
        { nome: "Felipe", sobrenome: "Massa", pais: "Brasil", vitorias: 11, titulos: 0, mencao: true, descricao: "Protagonizou o final de campeonato mais emocionante em Interlagos (2008). Um ícone da Ferrari e do Brasil." },
        { nome: "Rubens", sobrenome: "Barrichello", pais: "Brasil", vitorias: 11, titulos: 0, mencao: true, descricao: "O piloto com maior longevidade na história brasileira. Venceu corridas memoráveis e foi peça chave na era Ferrari." }
    ];

    hallDaFama.sort((a, b) => b.titulos - a.titulos || b.vitorias - a.vitorias);
    res.json(hallDaFama);
}

module.exports = { buscarLendas };