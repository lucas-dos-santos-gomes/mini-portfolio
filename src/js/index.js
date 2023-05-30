x = Math.random();
if (x < 0.5) {
    document.documentElement.style.setProperty('--img-url', "url(../img/fundo-programming.jpg)");
    document.documentElement.style.setProperty('--bg-pst', "center");
    document.documentElement.style.setProperty('--rosa', "red");
    document.documentElement.style.setProperty('--verde-azul', "#02a7d0");
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