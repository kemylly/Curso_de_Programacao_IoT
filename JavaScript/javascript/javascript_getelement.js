function botao1(){
  var texto = document.getElementById("texto");
  var atual = texto.innerHTML;
  
  texto.innerHTML = atual.toUpperCase();
}

function botao2(){
  var texto = document.getElementById("texto");
  var atual = texto.innerHTML;
  
  texto.innerHTML = atual.toLowerCase();
}

function botao3(){
  var texto = document.getElementById("texto");
  var atual = texto.innerHTML;
  
if(atual[0] == atual[0].toUpperCase())
	texto.innerHTML = atual.toLowerCase();
else
	texto.innerHTML = atual.toUpperCase();
}
