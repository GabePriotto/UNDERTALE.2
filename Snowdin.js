var textoOriginal ="Original";
var primeiroTexto = "Olá, meu nome é Flowey, a flor!";
var segundoTexto = "Você já me conhece?";
var terceiroTexto = "Incrível! Mas não me lembro de você...";
var quartoTexto = "Deixa pra lá... Você estava querendo baixar algo, não é?";
var quintoTexto = "Deixe-me ver... hmmm... Undertale 2...?";
var sextoTexto = "Sim, eu te ajudarei a baixá-lo, se quiser...";
var aguardeUm = "Aguarde um pouco... Processando...";
var aguardeDois = "10%...";
var aguardeTres = "50%...";
var aguardeQuatro = "70%...";
var aguardeCinco = "100%!";
var pronto = "Pronto! Bugs Corrigidos!";
var prontoUm = "Apenas clique na tecla abaixo e seu download será efetuado corretamente!";
var textoAtual = textoOriginal;

function show() {
   var elemento = document.getElementById("r");
   if (textoAtual === textoOriginal) {
    elemento.textContent = primeiroTexto;
    textoAtual = primeiroTexto;
   } else if (textoAtual === primeiroTexto) {
    elemento.textContent = segundoTexto;
    textoAtual = segundoTexto;
   } else if (textoAtual === segundoTexto) {
    elemento.textContent = terceiroTexto;
    textoAtual = terceiroTexto;
   } else if (textoAtual === terceiroTexto) {
    elemento.textContent = quartoTexto;
    textoAtual = quartoTexto;
   } else if (textoAtual === quartoTexto) {
    elemento.textContent = quintoTexto;
    textoAtual = quintoTexto;
   } else if (textoAtual === quintoTexto) {
    elemento.textContent = sextoTexto;
    textoAtual = sextoTexto;
   } else if (textoAtual === sextoTexto) {
    elemento.textContent = aguardeUm;
    textoAtual = aguardeUm;
   } else if (textoAtual === aguardeUm) {
    elemento.textContent = aguardeDois;
    textoAtual = aguardeDois;
   } else if (textoAtual === aguardeDois) {
    elemento.textContent = aguardeTres;
    textoAtual = aguardeTres;
   } else if (textoAtual === aguardeTres) {
    elemento.textContent = aguardeQuatro;
    textoAtual = aguardeQuatro;
   } else if (textoAtual === aguardeQuatro) {
    elemento.textContent = aguardeCinco;
    textoAtual = aguardeCinco;
   } else if (textoAtual === aguardeCinco) {
    elemento.textContent = pronto;
    textoAtual = pronto;
   } else if (textoAtual === pronto) {
    elemento.textContent = prontoUm;
    textoAtual = prontoUm;
   }
}

