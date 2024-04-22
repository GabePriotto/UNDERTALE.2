var textoOriginal ="original";
var texto1 ="MHAHAHAHAHAHAHHAA";
var texto2 ="Você vai mesmo me poupar?";
var texto3 ="Você sabe que eu vou voltar...";
var texto4 ="E VOU MATAR TODOS VOCÊS!";
var texto5 ="Me aguardem...";
var textoAtual = textoOriginal;

function show() {
    var elemento = document.getElementById("fala");
    if (textoAtual === textoOriginal) {
        elemento.textContent = texto1;
        textoAtual = texto1;
    } else if (textoAtual === texto1) {
        elemento.textContent = texto2;
        textoAtual = texto2;
    } else if (textoAtual === texto2) {
        elemento.textContent = texto3;
        textoAtual = texto3;
    } else if (textoAtual === texto3) {
        elemento.textContent = texto4;
        textoAtual = texto4;
    } else if (textoAtual === texto4) {
        elemento.textContent = texto5;
        textoAtual = texto5;
    } 
}