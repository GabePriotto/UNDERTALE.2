var textoOriginal ="original";
var texto1 ="Oh, certo. Você venceu...";
var texto2 ="Sim, não nego isso. Acabei... substimando você...";
var texto3 ="Pode pegar seu PC de volta...";
var texto4 ="Agora, apenas me deixe aqui... sozinho...";
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
    }
}