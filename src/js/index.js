const styleRoot = document.documentElement.style;
let styleState = false;
let random = Math.random();
if (random < 0.5) {
  styleRoot.setProperty('--img-url', "url(../img/fundo-programming.jpg)");
  styleRoot.setProperty('--bg-pst', "center");
  styleRoot.setProperty('--rosa', "red");
  styleRoot.setProperty('--verde-azul', "#02a7d0");
  styleState = true;
}

function alterScreen() {
  if(styleState) {
    styleRoot.setProperty('--img-url', "url(../img/fundo-neon-city.gif)");
    styleRoot.setProperty('--bg-pst', "center top");
    styleRoot.setProperty('--rosa', "#e228d8");
    styleRoot.setProperty('--verde-azul', "#02d08f");
    styleState = false;
  } else {
    styleRoot.setProperty('--img-url', "url(../img/fundo-programming.jpg)");
    styleRoot.setProperty('--bg-pst', "center");
    styleRoot.setProperty('--rosa', "red");
    styleRoot.setProperty('--verde-azul', "#02a7d0");
    styleState = true;
  }
}

let touches = [-100, -100];

window.addEventListener("touchend", e => {
  touches.push(e.timeStamp);
  touches.shift();
  if(touches[1] - touches[0] < 300) {
    alterScreen();
  }
});

window.addEventListener("keypress", e => {
  if(e.code == "Space") {
    alterScreen();
  }
});

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
  aba.addEventListener("click", function(){
    if (aba.classList.contains("selecionada")) {
      return;
    }
    return selecionarAba(aba);
  });
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