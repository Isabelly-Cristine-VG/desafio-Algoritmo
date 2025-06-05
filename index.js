let jogadores = [];

function adicionarJogador() {
    var nomeIpt = ipt_nome.value.trim();
    var mensagem = '';

    // Verifica se o nome já está cadastrado
    if (jogadores.some(j => j.nome === nomeIpt)) {
        alert("Jogador já cadastrado");
        return;
    }

    // Adiciona o novo jogador como objeto
    jogadores.push({ nome: nomeIpt, dificuldade: null });

    // Monta a mensagem com os jogadores cadastrados
    for (var i = 0; i < jogadores.length; i++) {
        mensagem += `${i + 1}° Jogador: ${jogadores[i].nome}<br>`;
    }

    jogadoresCadastrados.innerHTML = mensagem;
}

function iniciar() {
    var dificuldade = ipt_dificuldade.value;

    // Atribui a dificuldade a todos os jogadores
    for (let i = 0; i < jogadores.length; i++) {
        jogadores[i].dificuldade = dificuldade;
    }

    console.log(jogadores);
    window.location.href = "jogo.html";
}
