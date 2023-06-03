const abas = document.querySelectorAll(".aba");
let tabindex = 0;

abas.forEach(aba => {
  aba.addEventListener;("click", function(){
    if (aba.classList.contains("selecionada")) {
      return;
    }
    return selecionarAba(aba);
  });
  aba.setAttribute("tabindex", tabindex);
  tabindex++;
});

function selecionarAba(aba) {
  const abaSelecionada = document.querySelector(".aba.selecionada");
  abaSelecionada.classList.remove("selecionada");
  aba.classList.add("selecionada");

  return selecionarInformacao(aba);
}

function selecionarInformacao(aba) {
  const informacaoSelecionada = document.querySelector(".informacao.selecionado");
  informacaoSelecionada.classList.remove("selecionado");

  const idInformacao = (`informacao-${aba.id}`);
  const informacaoMostrada = document.getElementById(idInformacao);
  informacaoMostrada.classList.add("selecionado");
}

const linksSociais = document.querySelectorAll(".redes-sociais_links");
linksSociais.forEach(item => {
  item.addEventListener("mouseover", () => {
    for(let i = 0; i < linksSociais.length; i++) {
      if(linksSociais[i] != item) {
        linksSociais[i].style.opacity = "0.5";
      }
    }
  });
  item.addEventListener("mouseout", () => {
    for(let i = 0; i < linksSociais.length; i++) {
      linksSociais[i].style.opacity = "1";
    }
  });
});