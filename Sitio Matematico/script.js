function operadores(letra){
	var numero = document.getElementById("numero").value;
	var numero2 = document.getElementById("numero2").value;
	var resultado;
	
	if(letra == 1){
		resultado = parseInt(numero) + parseInt(numero2);
	}
	else{
		if(letra == 2){
			resultado = parseInt(numero) - parseInt(numero2);
		}
		else if(letra == 3){
			resultado = parseInt(numero) * parseInt(numero2);
		}
		else if(letra == 4){
			resultado = parseInt(numero) / parseInt(numero2);
		}
	}
	
	document.getElementById("result").value = resultado;
	
}