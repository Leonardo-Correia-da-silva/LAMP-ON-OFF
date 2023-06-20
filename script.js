var imgAtual = "apagada.jpg";
var imgAnterior = "acesa.jpg";

function trocar1 (){

document.getElementById("imagem").src=imgAtual; //luz apagada
imgAtual = imgAnterior;
}


var anterior = "apagada.jpg";

function trocar2 (){

document.getElementById("imagem").src = anterior;

}