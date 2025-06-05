let qtdLinhas = 8
let qtdColunas = 8
let qtdBomba =0
let dificuldade = 1
let matriz = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]

for (let navio = 0; navio < 21; navio++) {
    var numlinha = Math.floor(Math.random() * 8)
    var numcoluna = Math.floor(Math.random() * 8)

    if (matriz[numlinha][numcoluna] == 0) {
        matriz[numlinha][numcoluna] = 1
    } else {
        navio--
    }
}

if(dificuldade==1)[
    qtdBomba=16
]
else if(dificuldade==2){
    qtdBomba=20
}
else if(dificuldade==3){
    qtdBomba=30
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

for(i=0; i<matriz.length; i++){
    for(a=0; a<matriz.length; a++){
        div_matriz.innerHTML+=`<div class="item">${matriz[i][a]}</div>`
    }
    div_matriz.innerHTML+=`<br>`
}
console.log(matriz);