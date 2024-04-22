var textoOriginal ="Original";
var textoUm ="MHHAHAHAHAHAHAHAHAHAAHAHA";
var textoDois ="Seu idiota!";
var textoTres ="Você realmente achou que havia um Undertale 2?";
var textoQuatro ="Nah! Agora o seu PC é meu!";
var textoCinco ="Hã? O que está fazendo? Você acha que pode recuperar seu PC?";
var textoSeis ="MHAAHAHAHAHAHAHAHAHAHAHAHAHAHA";
var textoSete ="Não seja idiota! Não me faça rir!";
var textoOito ="Ha! Nem perca seu tempo TENTANDO lutar comigo...";
var textoNove ="Agora que seu PC é meu, posso fazer o que quiser com ele!";
var textoDez ="MHAHAHAHAHHAHAHHAHAHAHHHAHAHAHAHHAHAHHAhahAHAHHAH";
var textoAtual = textoOriginal;

function show() {
    var elemento = document.getElementById("flowey");
    if (textoAtual === textoOriginal) {
        elemento.textContent = textoUm;
        textoAtual = textoUm;
    } else if (textoAtual === textoUm) {
        elemento.textContent = textoDois;
        textoAtual = textoDois;
    } else if (textoAtual === textoDois) {
        elemento.textContent = textoTres;
        textoAtual = textoTres;
    } else if (textoAtual === textoTres) {
        elemento.textContent = textoQuatro;
        textoAtual = textoQuatro;
    } else if (textoAtual === textoQuatro) {
        elemento.textContent = textoCinco;
        textoAtual = textoCinco;
    } else if (textoAtual === textoCinco) {
        elemento.textContent = textoSeis;
        textoAtual = textoSeis;
    } else if (textoAtual === textoSeis) {
        elemento.textContent = textoSete;
        textoAtual = textoSete;
    } else if (textoAtual === textoSete) {
        elemento.textContent = textoOito;
        textoAtual = textoOito;
    } else if (textoAtual === textoOito) {
        elemento.textContent = textoNove;
        textoAtual = textoNove;
    } else if (textoAtual === textoNove) {
        elemento.textContent = textoDez;
        textoAtual = textoDez;
    }
}