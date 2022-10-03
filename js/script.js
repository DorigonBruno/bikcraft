// ativar links menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
  const url = document.location.href;
  const href = link.href;

  if(url.includes(href)){
    link.classList.add('ativo')
  }
}

links.forEach(ativarLink)


// Ativar items do orçamento
const url = new URLSearchParams(location.search);

function ativarProduto(url){
  const elemento = document.getElementById(url);
  if(elemento){
    elemento.checked = true
  }
}

url.forEach(ativarProduto);


// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  console.log(ativa)
  pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas);


// Galeria de bicicletas

const galeria = document.querySelectorAll('.bicicleta-imagem img');
const galeriaContainer = document.querySelector('.bicicleta-imagem')

function trocarImagem(event){
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  if(media) {
    galeriaContainer.prepend(img);
  }
  console.log(img)
}

function eventosGaleria(img){
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria);