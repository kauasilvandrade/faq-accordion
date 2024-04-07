function abrirFecharResposta(index) {
    let respostas = document.querySelectorAll('.secaFaqs__respostaPergunta');
    let btnImgs = document.querySelectorAll('.btnImg');
    const classeAtivado = 'ativado';
    
    respostas[index].classList.toggle(classeAtivado);
    if (respostas[index].classList.contains(classeAtivado)) {
        btnImgs[index].src = "assets/images/icon-minus.svg";
    } else {
        btnImgs[index].src = "assets/images/icon-plus.svg";
    }
    
}
const btnRespotas = document.querySelectorAll('.secaoFaqs__tituloBtn');

for (let i = 0; i < btnRespotas.length; i++) {
    btnRespotas[i].addEventListener('click', () => abrirFecharResposta(i)) 
}
