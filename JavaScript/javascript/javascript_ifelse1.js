function myFunction() {
  
  var num1 = Number(document.getElementById("input1").value);
  var num2 = Number(document.getElementById("input2").value);
  
  if(num1 == num2)
	  alert(num1 + " é igual a " + num2);
  else if(num1 > num2)
    alert(num1 + " é maior que " + num2);
  else
    alert(num2 + " é maior que " + num1);
}