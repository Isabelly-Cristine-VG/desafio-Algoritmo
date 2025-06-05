
var numMaior = 0
var numMedio = 0
var numMenor = 0
var donoMaior=``
var donoMedio=``
var donoMenor=``

for(i=0; i<pontuacoes.length; i++){

    if(pontuacoes[i]>numMaior){
        numMenor=numMedio
        numMedio=numMaior
        numMaior=pontuacoes[i]
    }
}

for(a=0; a<pontuacoes.length; a++){
    if(numMaior==pontuacoes[a]){
        donoMaior=jogadores[a].nome
    }
    else if(numMedio==pontuacoes[a]){
        donoMedio=jogadores[a].nome
    }
    else if(numMenor==pontuacoes[a]){
        donoMenor=jogadores[a].nome
    }
}


