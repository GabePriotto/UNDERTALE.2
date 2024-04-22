var textoOriginal ="Original";
var texto1 ="Tolo! Eu te avisei para não fazer isso...";
var texto2 ="Bem, agora não me resta outra alternativa...";
var texto3 ="Nesse mundo, é matar ou morrer!";
var textoAtual = textoOriginal;

function show() {
    var elemento = document.getElementById("flor");
    if (textoAtual === textoOriginal) {
        elemento.textContent = texto1;
        textoAtual = texto1;
    } else if (textoAtual === texto1) {
        elemento.textContent = texto2;
        textoAtual = texto2;
    } else if (textoAtual === texto2) {
        elemento.textContent = texto3;
        textoAtual = texto3;
    }
}
function subtrair() {
    var h1 = document.getElementById("omega");
    var texto = h1.innerText;
    var omega = parseFloat(texto);
    var novoNumero = omega - 5;
    h1.innerText = novoNumero;
    if (novoNumero <= 0) {
        window.location.href = 'New Home.html';
    } 
    }
function adicionar() {
    var h1 = document.getElementById("alfa");
    var texto = h1.innerText;
    var alfa = parseFloat(texto);
    var gatoNumero = alfa + 5;
    h1.innerText = gatoNumero;
    if (gatoNumero <= 0) {
        reset();
    }
} 
function acertar() {
    var h1 = document.getElementById("alfa");
    var texto = h1.innerText;
    var alfa = parseFloat(texto);
    var ruimNumero = alfa - 10;
    h1.innerText = ruimNumero;
}
function perdemo() {
    var h1 = document.getElementById("omega");
    var texto = h1.innerText;
    var omega = parseFloat(texto);
    var newNumero = omega + 2;
    h1.innerText = newNumero;
}
function trocarParaVideo() {
  var imagem = document.getElementById('imagem');
  var video = document.getElementById('video');
   imagem.style.display = 'none';
  video.style.display = 'block';

  video.play();

  video.onended = function() {
    imagem.style.display = 'block';
    video.style.display = 'none';
  };
}

function verificarAlfa() {
    var h1 = document.getElementById("alfa");
    var texto = h1.innerText;
    var alfa = parseFloat(texto);
    if (alfa <= 0) {
        reset();
    }
}

function reset() {
    window.location.reload();
}
