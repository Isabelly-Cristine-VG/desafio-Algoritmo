
jogadores = []

function adicionarJogador() {
    var nomeIpt = ipt_nome.value.trim();
    var mensagem = '';

    // Verifica se o nome já está cadastrado
    if (jogadores.includes(nomeIpt)) {
        alert("Jogador Já Cadastrado");
        return;
    }

    // Adiciona o novo jogador
    jogadores.push(nomeIpt);

    // Monta a mensagem com os jogadores cadastrados
    for (var i = 0; i < jogadores.length; i++) {
        mensagem += `${i + 1}° Jogador: ${jogadores[i]}<br>`;
    }

    jogadoresCadastrados.innerHTML = mensagem;
}
