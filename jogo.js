
function gerarMatriz(){
let qtdLinhas = 8
let qtdColunas = 8
let qtdBomba = 0
let dificuldade = 1


let matriz = [[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0]]

for (let navio = 0; navio < 21; navio++) {

    var numlinha = Math.floor(Math.random() * 8)
    var numcoluna = Math.floor(Math.random() * 8)

    if (matriz[numlinha][numcoluna] == 0) {
        matriz[numlinha][numcoluna] = 1
    } else {
        navio--
    }
}

if (dificuldade == 1) [
    qtdBomba = 16
]
else if (dificuldade == 2) {
    qtdBomba = 20
}
else if (dificuldade == 3) {
    qtdBomba = 30
}

for (let bomba = 0; bomba < qtdBomba; bomba++) {
    var numlinha = Math.floor(Math.random() * 8)
    var numcoluna = Math.floor(Math.random() * 8)

    if (matriz[numlinha][numcoluna] == 0) {
        matriz[numlinha][numcoluna] = 2
    } else {
        bomba--
    }
}

for (i = 0; i < matriz.length; i++) {
    for (a = 0; a < matriz.length; a++) {
        div_matriz.innerHTML += `<button onclick="verificar(i,a)"></button>`
    }
    div_matriz.innerHTML += `<br>`
}
}

var pontuacao = 0
var vida = 6
var pontuacoes = []
var partida = 1

function verificar(b, a) {
    var armadilha = false
    var tesouro = false


    for (let i = 0; i < matriz.length; i++) {
        if (matriz[b][a] == 1) {
            tesouro = true
            return
        }
        if (matriz[b][a] == 2) {
            armadilha = true
            return
        }
    }

    if (armadilha) {
        vida--

        if (vida == 0) {
            pontuacoes.push(pontuacao)
            vida = 6
            pontuacao = 0
            partida++
            if(partida <= 3){
              gerarMatriz()  
            }else{
                window.location.href = "ranking.html"
            }
            
        }
    } else if (tesouro) {
        pontuacao++


        if (pontuacao == 20) {
            pontuacoes.push(pontuacao)
            vida = 6
            pontuacao = 0
            partida++
            if(partida <= 3){
                gerarMatriz()
            }else{
                window.location.href = "ranking.html"
            }
            
        }

    }

}