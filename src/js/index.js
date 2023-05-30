x = Math.random();
if (x < 0.5) {
    const styleRoot = document.documentElement.style;
    styleRoot.setProperty('--img-url', "url(../img/fundo-programming.jpg)");
    styleRoot.setProperty('--bg-pst', "center");
    styleRoot.setProperty('--rosa', "red");
    styleRoot.setProperty('--verde-azul', "#02a7d0");
}

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