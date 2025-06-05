
jogadores = []


function adicionarJogador() {
    var nomeIpt = ipt_nome.value
    var mensagem = ''
    jogadores.push(nomeIpt)

    for (var i = 0; i < jogadores.length; i++) {

        mensagem += `${i + 1}° Jogador: ${jogadores[i]}<br>  `
    }
    jogadoresCadastrados.innerHTML = mensagem

}