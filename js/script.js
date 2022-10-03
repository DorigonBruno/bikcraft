const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
  const url = document.location.href;
  const href = link.href;

  if(url.includes(href)){
    link.classList.add('ativo')
  }
}

links.forEach(ativarLink)