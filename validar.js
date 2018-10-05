window.onload=iniciar;
function iniciar() {
	document.getElementById("enviar").addEventListener('click', validar, false);
}

function validarNombre() {
	var elemento = document.getElementById("nombre");
	if (!elemento.checkValidity()) {
		if (elemento.validity.valueMissing) {
			error2(elemento, "El nombre es incorrecto");
		}
		if (elemento.validity.patternMismatch) {
			error2(elemento, "Debe tener entre 5 y 15 caract");
		}
	
		// error(elemento);
		return false;
	}
	return true;
}

function validarApellido() {
	var elemento = document.getElementById("apellido");
	if (!elemento.checkValidity()) {
		if (elemento.validity.valueMissing) {
			error2(elemento, "Apellido es incorrecto");
		}
		if (elemento.validity.patternMismatch) {
			error2(elemento, "Debe tener entre 5 y 20 caract");
		}
		
		// error(elemento);
		return false;
	}
	return true;
}

function validarTelefono() {
	var elemento = document.getElementById("telefono");
	if (!elemento.checkValidity()) {
		if (elemento.validity.valueMissing) {
			error2(elemento, "El telefono es incorrecto");
		}
		if (elemento.validity.patternMismatch) {
			error2(elemento, "El telefono debe contener 9 digitos");
		}
		if (elemento.validity.typeMismatch) {
			error2(elemento, "No es numero");
		}
		return false;
	}
	return true;
}

function validarEmail() {
		var elemento = document.getElementById("email");
		if (!elemento.checkValidity()) {
			if (elemento.validity.valueMissing) {
				error2(elemento, "Email es incorrecto");
			}
			if (elemento.validity.patternMismatch) {
				error2(elemento, "Email no ubicado");
			}
			return false;
		}
		return true;
}

function validarComentarios() {
	var elemento = document.getElementById("obsComen");
	if (!elemento.checkValidity()) {
		return false;
	}
	return true;
}

function confirmar() {
	confirm("pulsa aceptar para enviar tu datos");
	return true;
}

function validar(e) {
	borrarError();
	if (validarNombre() && validarApellido() && validarTelefono() && validarEmail() && confirmar()) {
		return true;	
	} else {
		e.preventDefault();
		return false;
	}
}

function error(elemento) {
	document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
	elemento.validationMessage;
	elemento.className = "error";
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
