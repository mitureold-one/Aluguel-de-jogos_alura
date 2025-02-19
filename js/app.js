
function alterarStatus(id){
    let game = document.getElementById(`game-${id}`);
    let botam = game.querySelector('a');
    let imagem = game.querySelector('div');

    let alugado = botam.classList.contains('dashboard__item__button')

    botam.textContent = alugado ? 'Devolver': 'Alugar'
    botam.classList.toggle('dashboard__item__button');
    botam.classList.toggle('dashboard__item__button--return');

    imagem.classList.toggle('dashboard__item__img--rented');


    
   //if (botam.classList.contains('dashboard__item__button') ){
        //botam.textContent='Devolver';
        //botam.classList.toggle('dashboard__item__button');
        //botam.classList.add('dashboard__item__button--return');
   // } else{    
  //      botam.textContent= 'Alugar';
  ///      botam.classList.remove('dashboard__item__button--return');
  //      botam.classList.add('dashboard__item__button');
  //  }
    
}