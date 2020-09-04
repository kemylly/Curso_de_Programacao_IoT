function multiplicacao(num1, num2) {
  return (num1*num2);
}
  
function divisao(num1, num2) {
  return (num1/num2);
}
  
function soma(num1, num2) {
	return (num1+num2);
}

function subtracao(num1, num2) {
	return (num1-num2);
}

function potencia(num1, num2) {
	i = num2 - 1;
	aux = num1;
	
	while(i>0){
		aux = aux*num1;
		i = i - 1;
	}
	return (aux);
}
  
function calcular() {
  
  var num1 = Number(document.getElementById("input1").value);
  var num2 = Number(document.getElementById("input2").value);
  
  var inputs = document.getElementsByName("operacao");
  
    if(inputs[0].checked)    
      alert(multiplicacao(num1, num2));
    if(inputs[1].checked)    
      alert(divisao(num1, num2));
	if(inputs[2].checked)    
      alert(soma(num1, num2));
	if(inputs[3].checked)    
      alert(subtracao(num1, num2));
	if(inputs[4].checked)
		alert(potencia(num1, num2));
}