let jogosAlugados = 0;
let jogosDevolvidos = 0;

function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let botam = game.querySelector('a');
    let imagem = game.querySelector('div');
    let nome = game.querySelector('.dashboard__item__name').textContent;
    
    let alugado = botam.classList.contains('dashboard__item__button--return');

    let resposta = confirmar(nome, alugado); 
    if (!resposta) return;

    if (alugado) {
        jogosAlugados--;
        jogosDevolvidos++;
    } else {
        jogosAlugados++;
        jogosDevolvidos--;
    }



    botam.textContent = alugado ? 'Alugar' : 'Devolver';
    botam.classList.toggle('dashboard__item__button');
    botam.classList.toggle('dashboard__item__button--return');

    imagem.classList.toggle('dashboard__item__img--rented');
    quantidade();

}

function confirmar(nome, alugado) {
    let mensagem = alugado 
        ? `Você realmente quer devolver o jogo: "${nome}"?` 
        : `Você realmente quer alugar o jogo: "${nome}"?`;

    return confirm(mensagem);
}

function quantidade (){
    console.log(`A quantidade jogos alugados é: ${jogosAlugados}`)
    console.log(`A quantidade jogos devolvidos é: ${jogosDevolvidos}`)
}