window.onload=iniciar;
function iniciar() {
	document.getElementById("enviar").addEventListener('click', validar, false);
}

function validarNombre() {
	var elemento = document.getElementById("nombre");
	if (!elemento.checkValidity()) {
		if (elemento.validity.valueMissing) {
			error2(elemento, "El nombre es incorrecto")
		}
		if (elemento.validity.patternMismatch) {
			error2(elemento, "Debe tener entre 2 y 15 caract");
		}
		// error(elemento);
		return false
	}
	return true;
}
function validarEdad() {
	var elemento = document.getElementById("edad");
	if (!elemento.checkValidity()) {
		if (elemento.validity.valueMissing) {
			error2(elemento, "Debe introducir su edad");
		}
		if (elemento.validity.rangeOverflow) {
			error2(elemento, "El valor debe ser menor a 100");
		}
		if (elemento.validity.rangeUnderflow) {
			error2(elemento, "El valor debe ser mayor a 18");
		}
		// error(elemento);
		return false
	}
	return true;
}

function validar(e) {
	borrarError();
	if (validarNombre() && validarEdad() && confirm("pulsa aceptar para enviar tu datos")) {
		return true;	
	} else {
		e.preventDefault();
		return false;
	}
}

function error(elemento) {
	document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
	elemento.validationMessage;
	elemento.className = "error"
	elemento.focus();
}

function error2 (elemento, mensaje) {
	document.getElementById("mensajeError").innerHTML = mensaje;
	elemento.className = "error";
	elemento.focus();
}

function borrarError() {
	var formulario = document.forms[0];
	for (var i = 0; i <formulario.elements.length; i++) {
		formulario.elements[i].className = "";
	}
}