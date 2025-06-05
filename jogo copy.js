var pontuacao = 0
var vida = 6

function verificar(id){ 
    var armadilha = false
    var tesouro = false



    for(let i = 0; i < armadilhas.length; i++){
        if(id == armadilhas[i]){
            armadilha = true
            return
        }
    }

    for(let i = 0; i < tesouros.length; i++){
        if(id == tesouros[i]){
            tesouro = true
            return
        }
    }

    if(armadilha){
        vida--

        if(vida == 0){
            vida = 6
            pontuacao = 0
        }
    }else if(tesouro){
        pontuacao++

       
        if(pontuacao == 20){
            vida = 6
            pontuacao = 0
        }
        
    }else {

    }


}