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