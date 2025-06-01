create database gridHistorico;

use gridHistorico;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(100),
senha varchar(100)
);

create table quiz (
idQuiz int primary key auto_increment,
numero_questoes int,
data_tentativa date
);

create table resultado (
idResultado int auto_increment,
fkUsuario int,
fkQuiz int,
numero_acertos int,
primary key (idResultado, fkUsuario, fkQuiz),
foreign key fkUsuario (fkUsuario) references usuario (idUsuario),
foreign key fkQuiz (fkQuiz) references quiz (idQuiz)
);

create table pilotos (
idPiloto int primary key auto_increment,
back varchar(150),
nome varchar(45),
abreviacao char(3),
dt_nascimento date,
dt_estreia date,
primeira_vitoria varchar(45),
numero_corridas int,
numero_vitorias int,
numero_titulos int,
nacionalidade varchar(45),
tempo_de_f1 varchar(45),
curiosidade text,
resumo text
);

INSERT INTO pilotos (
   back, nome, abreviacao, dt_nascimento, dt_estreia, primeira_vitoria,
    numero_corridas, numero_vitorias, numero_titulos, nacionalidade, tempo_de_f1,
    curiosidade, resumo
) VALUES 
(
    './assets/imgs/Schumacher1.jpg','Michael Schumacher', 'MSC', '1969-01-03', '1991-08-25', '1992 - GP da Bélgica',
    308, 91, 7, 'Alemão', 21,
    'Michael Schumacher é considerado um dos maiores pilotos da história da F1, conhecido por sua precisão e domínio técnico.',
    'Schumacher estreou em 1991 e logo se tornou um ícone da Ferrari, com cinco títulos consecutivos pela equipe italiana.'
),
(
    './assets/imgs/Hamilton1.jpg','Lewis Hamilton', 'HAM', '1985-01-07', '2007-03-18', '2007 - GP do Canadá',
    332, 103, 7, 'Britânico', 18,
    'Hamilton é um ativista dentro e fora das pistas e empatou com Schumacher em número de títulos.',
    'Com sete títulos mundiais, Hamilton é reconhecido por seu talento nato e consistência ao longo dos anos.'
),
(
    './assets/imgs/Fangio1.jpg','Juan Manuel Fangio', 'FAN', '1911-06-24', '1950-05-13', '1950 - GP de Mônaco',
    51, 24, 5, 'Argentino', 8,
    'Fangio conquistou cinco títulos mundiais com quatro equipes diferentes, um feito inédito na história da F1.',
    'Considerado o mestre da pilotagem na década de 1950, Fangio estabeleceu um padrão de excelência na F1.'
),
(
    './assets/imgs/Prost1.jpg', 'Alain Prost', 'PRO', '1955-02-24', '1980-01-13', '1981 - GP da França',
    199, 51, 4, 'Francês', 13,
    'Conhecido como "O Professor" pela sua pilotagem cerebral e estratégica.',
    'Prost teve uma rivalidade histórica com Ayrton Senna, sendo uma das figuras mais importantes da F1 dos anos 80.'
),
(
    './assets/imgs/Vettel1.jpg','Sebastian Vettel', 'VET', '1987-07-03', '2007-06-17', '2008 - GP da Itália',
    299, 53, 4, 'Alemão', 15,
    'Vettel foi o mais jovem campeão mundial da história da F1 na época, com apenas 23 anos.',
    'Dominou a era da Red Bull entre 2010 e 2013, conquistando quatro títulos consecutivos.'
),
(
    './assets/imgs/Max1.jpg','Max Verstappen', 'VER', '1997-09-30', '2015-03-15', '2016 - GP da Espanha',
    187, 59, 3, 'Neerlandês', 10,
    'Primeiro piloto neerlandês a vencer um GP e a conquistar um título mundial.',
    'Max revolucionou a nova geração da F1 com um estilo agressivo e um domínio absoluto nas temporadas recentes.'
);


INSERT INTO pilotos (
   back, nome, abreviacao, dt_nascimento, dt_estreia, primeira_vitoria,
    numero_corridas, numero_vitorias, numero_titulos, nacionalidade, tempo_de_f1,
    curiosidade, resumo
) VALUES 
-- Ayrton Senna
('./assets/imgs/Senna1.jpg','Ayrton Senna', 'SEN', '1960-03-21', '1984-03-25', '1985 - Estoril',
 161, 41, 3, 'Brasileiro', 10,
 'Famoso por sua habilidade em corridas com pista molhada e voltas voadoras em classificação.',
 'Senna foi um dos maiores ídolos do Brasil e da Fórmula 1, conhecido por sua determinação, fé e carisma dentro e fora das pistas.'),

-- Jack Brabham
('./assets/imgs/Brabham1.jpg','Jack Brabham', 'BRA', '1926-04-02', '1955-07-16', '1959 - Mônaco',
 126, 14, 3, 'Australiano', 15,
 'Único piloto a vencer um campeonato mundial com carro próprio (Brabham).',
 'Jack Brabham foi um dos pioneiros da Fórmula 1, ajudando a moldar a engenharia dos carros na era clássica do automobilismo.'),

-- Jackie Stewart
('./assets/imgs/Stewart1.jpg','Jackie Stewart', 'STE', '1939-06-11', '1965-01-01', '1965 - Itália',
 99, 27, 3, 'Britânico', 9,
 'Ativista por segurança na F1, responsável por mudanças drásticas nos padrões de proteção dos pilotos.',
 'Conhecido como "The Flying Scot", Stewart foi um dos pilotos mais consistentes e técnicos da década de 60 e início de 70.'),

-- Niki Lauda
('./assets/imgs/Lauda1.jpg','Niki Lauda', 'LAU', '1949-02-22', '1971-03-21', '1974 - Espanha',
 171, 25, 3, 'Austríaco', 13,
 'Sobreviveu a um grave acidente em 1976 e retornou às pistas apenas 42 dias depois.',
 'Lauda foi símbolo de coragem e resiliência, vencendo três campeonatos com um estilo calculado e disciplinado.'),

-- Nelson Piquet
('./assets/imgs/Piquet1.jpg','Nelson Piquet', 'PIQ', '1952-08-17', '1978-01-15', '1980 - EUA Oeste',
 204, 23, 3, 'Brasileiro', 14,
 'Engenhoso e estratégico, era conhecido por sua habilidade em desenvolver o carro e provocar adversários.',
 'Piquet foi o primeiro tricampeão brasileiro e deixou seu nome na história com vitórias em várias eras da Fórmula 1.'),

-- Fernando Alonso
('./assets/imgs/Alonso1.jpg','Fernando Alonso', 'ALO', '1981-07-29', '2001-03-04', '2003 - Hungria',
 370, 32, 2, 'Espanhol', 21,
 'Foi o mais jovem bicampeão da história na época, desbancando Michael Schumacher em 2005.',
 'Alonso é reconhecido por sua habilidade técnica e competitividade, com passagens marcantes por várias equipes.'
);


INSERT INTO pilotos (
   back, nome, abreviacao, dt_nascimento, dt_estreia, primeira_vitoria,
    numero_corridas, numero_vitorias, numero_titulos, nacionalidade, tempo_de_f1,
    curiosidade, resumo
) VALUES 
-- Mika Häkkinen
('./assets/imgs/Häkkinen1.jpg','Mika Häkkinen', 'HAK', '1968-09-28', '1991-03-10', 'GP da Europa de 1997',
 165, 20, 2, 'Finlândia', 10,
 'Conhecido como "O Homem de Gelo", Mika foi bicampeão mundial em 1998 e 1999, vencendo duelos icônicos contra Schumacher.',
 'Häkkinen teve uma carreira marcada por sua lealdade à McLaren, sua recuperação após um grave acidente em 1995 e sua velocidade pura.'),

-- Emerson Fittipaldi
('./assets/imgs/Fitti1.jpg','Emerson Fittipaldi', 'FIT', '1946-12-12', '1970-07-18', 'GP dos EUA de 1970',
 149, 14, 2, 'Brasil', 10,
 'Foi o primeiro brasileiro campeão da F1, vencendo em 1972 e novamente em 1974. Também foi campeão da Indy 500 e da CART.',
 'Fittipaldi abriu caminho para os brasileiros na F1. Após sua carreira europeia, teve enorme sucesso nos EUA e é um ícone do automobilismo mundial.'),

-- Graham Hill
('./assets/imgs/Graham1.jpg','Graham Hill', 'GHI', '1929-02-15', '1958-05-18', 'GP de Mônaco de 1962',
 176, 14, 2, 'Reino Unido', 17,
 'É o único piloto a conquistar a Tríplice Coroa do Automobilismo: F1, 24 Horas de Le Mans e Indy 500.',
 'Hill foi um mestre em Mônaco e pai de Damon Hill, também campeão da F1. Sua elegância e carisma marcaram uma geração.'),

-- Jim Clark
('./assets/imgs/Clark1.jpg','Jim Clark', 'CLA', '1936-03-04', '1960-06-06', 'GP da Bélgica de 1962',
 72, 25, 2, 'Reino Unido', 9,
 'Considerado por muitos como um dos mais talentosos pilotos da história, Clark venceu duas vezes o mundial antes de morrer jovem.',
 'Com uma pilotagem suave e veloz, Clark marcou época com a Lotus. Sua morte precoce em 1968 comoveu o mundo da F1.'),

-- Alberto Ascari
('./assets/imgs/Ascari1.jpg','Alberto Ascari', 'ASC', '1918-07-13', '1950-05-21', 'GP da Bélgica de 1951',
 33, 13, 2, 'Itália', 6,
 'Foi o primeiro bicampeão da F1, dominando as temporadas de 1952 e 1953 com a Ferrari.',
 'Ascari era disciplinado e meticuloso, diferente de outros pilotos italianos da época. Faleceu tragicamente testando um carro em Monza.'),

-- Nino Farina
('./assets/imgs/Farina1.jpg','Giuseppe Farina', 'FAR', '1906-10-30', '1950-05-13', 'GP da Grã-Bretanha de 1950',
 33, 5, 1, 'Itália', 5,
 'Farina foi o primeiro campeão mundial da história da Fórmula 1, vencendo o campeonato inaugural em 1950.',
 'Com estilo de pilotagem agressivo e postura aristocrática, Farina foi uma figura de destaque na era inicial da F1.');

 
 INSERT INTO pilotos (
    back,nome, abreviacao, dt_nascimento, dt_estreia, primeira_vitoria,
    numero_corridas, numero_vitorias, numero_titulos, tempo_de_f1,
    nacionalidade, curiosidade, resumo
) VALUES
-- 1. Mike Hawthorn
('./assets/imgs/Hawthorn1.jpg','Mike Hawthorn', 'HAW', '1929-04-10', '1952-05-18', 'França 1953',
 45, 3, 1, 7, 'Reino Unido',
 'Foi o primeiro britânico a conquistar um título mundial de F1.',
 'Campeão de 1958, conhecido pelo estilo ousado e por usar gravata borboleta durante as corridas.'),

-- 2. Phil Hill
('./assets/imgs/Phil1.jpg','Phil Hill', 'HIL', '1927-04-20', '1958-07-20', 'Itália 1960',
 48, 3, 1, 6, 'Estados Unidos',
 'Primeiro (e até hoje único) campeão mundial americano nascido nos EUA.',
 'Campeão de 1961, venceu durante a era da Ferrari dominada por carros de motor dianteiro.'),

-- 3. John Surtees
('./assets/imgs/Surtees1.jpg','John Surtees', 'SUR', '1934-02-11', '1960-05-29', 'Alemanha 1963',
 111, 6, 1, 9, 'Reino Unido',
 'Único campeão mundial nas duas rodas (Motociclismo) e na Fórmula 1.',
 'Campeão em 1964 pela Ferrari, era admirado pela sua versatilidade e técnica.'),

-- 4. Denny Hulme
('./assets/imgs/Hulme1.jpg','Denny Hulme', 'HUL', '1936-06-18', '1965-01-01', 'Mônaco 1967',
 112, 8, 1, 10, 'Nova Zelândia',
 'Chamado de “O Urso”, era conhecido por seu comportamento reservado e força física.',
 'Campeão de 1967 pela Brabham, constante e confiável nas pistas.'),

-- 5. Jochen Rindt
('./assets/imgs/Rindt1.jpg','Jochen Rindt', 'RIN', '1942-04-18', '1964-08-23', 'Estados Unidos 1969',
 60, 6, 1, 7, 'Áustria',
 'Único campeão póstumo da F1, após falecer em 1970.',
 'Campeão de 1970 pela Lotus. Dominou a temporada até sofrer um acidente fatal em Monza.'),

-- 6. James Hunt
('./assets/imgs/Hunt1.jpg','James Hunt', 'HUN', '1947-08-29', '1973-01-01', 'Holanda 1975',
 92, 10, 1, 7, 'Reino Unido',
 'Famoso por seu estilo rebelde e vida fora das pistas tanto quanto dentro delas.',
 'Campeão em 1976 após histórica disputa com Niki Lauda, representava o lado “rockstar” da F1.');

 
 INSERT INTO pilotos (
   back, nome, abreviacao, dt_nascimento, dt_estreia, primeira_vitoria,
    numero_corridas, numero_vitorias, numero_titulos, tempo_de_f1,
    nacionalidade, curiosidade, resumo
) VALUES
-- Mario Andretti
('./assets/imgs/Andretti1.jpg','Mario Andretti', 'AND', '1940-02-28', '1968-01-01', 'GP da África do Sul 1971',
 128, 12, 1, 13, 'EUA',
 'Andretti é um dos poucos pilotos a vencer corridas na Fórmula 1, IndyCar, World Sportscar Championship e NASCAR.',
 'Mario Andretti conquistou o título da F1 em 1978 pela Lotus, sendo um dos maiores nomes do automobilismo americano.'),

-- Jody Scheckter
('./assets/imgs/Scheckter1.jpg','Jody Scheckter', 'SCH', '1950-01-29', '1972-07-15', 'GP da Suécia 1974',
 112, 10, 1, 9, 'África do Sul',
 'Último campeão pela Ferrari antes de Schumacher, permanecendo como ídolo da equipe.',
 'Scheckter conquistou o campeonato mundial de F1 em 1979 pela Ferrari e se aposentou logo após.'),

-- Alan Jones
('./assets/imgs/Jones1.jpg','Alan Jones', 'JON', '1946-11-02', '1975-01-12', 'GP da Áustria 1977',
 116, 12, 1, 8, 'Austrália',
 'Primeiro piloto a conquistar um título pela equipe Williams.',
 'Jones venceu o campeonato mundial de 1980, colocando a Williams entre as grandes da F1.'),

-- Keke Rosberg
('./assets/imgs/Keke1.jpg','Keke Rosberg', 'ROS', '1948-12-06', '1978-03-19', 'GP da Suíça 1982',
 114, 5, 1, 9, 'Finlândia',
 'Pai de Nico Rosberg, Keke ficou famoso por seu estilo agressivo e bigode marcante.',
 'Keke Rosberg foi campeão mundial de F1 em 1982 com a Williams.'),

-- Nico Rosberg
('./assets/imgs/Nico1.jpg','Nico Rosberg', 'NIC', '1985-06-27', '2006-03-12', 'GP da China 2012',
 206, 23, 1, 11, 'Alemanha',
 'Único piloto a derrotar Lewis Hamilton em igualdades técnicas na era híbrida da Mercedes.',
 'Nico Rosberg venceu o campeonato mundial de F1 em 2016 e se aposentou logo em seguida.'),

-- Nigel Mansell
('./assets/imgs/Mansell1.jpg','Nigel Mansell', 'MAN', '1953-08-08', '1980-03-29', 'GP da Europa 1985',
 187, 31, 1, 15, 'Reino Unido',
 'Mansell é o único a ter os títulos de F1 e IndyCar simultaneamente (em 1993).',
 'Nigel Mansell foi campeão mundial de F1 em 1992 com a dominante Williams FW14B.');

 
 INSERT INTO pilotos (
    back,nome, abreviacao, dt_nascimento, dt_estreia, primeira_vitoria,
    numero_corridas, numero_vitorias, numero_titulos, tempo_de_f1, nacionalidade,
    curiosidade, resumo
) VALUES
(
   './assets/imgs/Damon1.jpg', 'Damon Hill', 'HIL', '1960-09-17', '1992-01-01', 'Hungary 1993',
    115, 22, 1, 7, 'Britânico',
    'Filho do bicampeão Graham Hill, Damon é o único filho de campeão mundial que também se tornou campeão até o momento.',
    'Damon Hill foi campeão mundial em 1996 pela Williams e vice-campeão em 1994 e 1995. Conhecido por sua rivalidade com Michael Schumacher.'
),
(
   './assets/imgs/Villeuneve1.jpg', 'Jacques Villeneuve', 'VIL', '1971-04-09', '1996-01-01', 'Europe GP 1996',
    165, 11, 1, 11, 'Canadense',
    'Único canadense campeão da F1 e filho de Gilles Villeneuve. Também competiu na Indy e venceu as 500 Milhas de Indianápolis.',
    'Jacques foi campeão mundial de F1 em 1997 pela Williams. Seu estilo agressivo e personalidade marcante o tornaram notável na década de 1990.'
),
(
    './assets/imgs/Raikkonen1.jpg','Kimi Räikkönen', 'RAI', '1979-10-17', '2001-01-01', 'Malaysia GP 2003',
    353, 21, 1, 19, 'Finlandês',
    'Conhecido como "Iceman", Kimi é famoso por sua frieza dentro e fora das pistas.',
    'Kimi foi campeão mundial em 2007 com a Ferrari. Disputou corridas até 2021, sendo um dos pilotos com mais GPs da história.'
),
(
    './assets/imgs/Button1.jpg','Jenson Button', 'BUT', '1980-01-19', '2000-01-01', 'Hungary GP 2006',
    306, 15, 1, 17, 'Britânico',
    'Campeão com a equipe Brawn GP em sua única temporada, 2009, uma das maiores surpresas da história da F1.',
    'Button é conhecido por sua pilotagem suave e consistência. Além do título, teve carreira sólida em várias equipes como BAR, Honda e McLaren.'
),
(
    './assets/imgs/Massa1.jpg','Felipe Massa', 'MAS', '1981-04-25', '2002-01-01', 'Turkey GP 2006',
    269, 11, 0, 15, 'Brasileiro',
    'Ficou a poucos segundos de ser campeão mundial em 2008, perdendo o título na última curva.',
    'Massa teve passagem marcante pela Ferrari, sendo vice-campeão em 2008. É lembrado por sua determinação e resiliência após acidente em 2009.'
),
(
    './assets/imgs/Rubinho1.jpg','Rubens Barrichello', 'BAR', '1972-05-23', '1993-01-01', 'Germany GP 2000',
    322, 11, 0, 19, 'Brasileiro',
    'É o piloto brasileiro com mais participações na F1. Teve papel fundamental nas vitórias da Ferrari nos anos 2000.',
    'Rubinho correu por diversas equipes, incluindo Ferrari e Brawn GP. Conhecido por sua longevidade e contribuição técnica.');


update pilotos set numero_titulos = 4 where idPiloto = 6;



select * from pilotos;





drop table pilotos;




select * from usuario;