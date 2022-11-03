x = Math.random();
if (x < 0.5) {
    const head = document.querySelector("head");
    head.removeChild(head.children[8]);
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