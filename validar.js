window.onload=iniciar;
function iniciar() {
	document.getElementById("enviar").addEventListener('click', validar, false);
}

//ERRORES  

var ERROR = {
		//Aplicar method map()
		Nombre: function(mensaje) {
			alertify.set('notifier','position', 'top-right');
 			alertify.error(mensaje);
		},
		Apellido: function(mensaje) {
			alertify.set('notifier','position', 'top-right');
			alertify.error(mensaje);			
		},
		Telefono: function(mensaje) {
			alertify.set('notifier','position', 'top-right');
			alertify.error(mensaje);
		},
		Email: function(mensaje) {
			alertify.set('notifier','position', 'top-right');
			alertify.error(mensaje);
		}
}


//VALIDATION
function validarNombre() {
	var elemento = document.getElementById("nombre");
	if (!elemento.checkValidity()) {
		if (elemento.validity.valueMissing) {
			error2(elemento, ERROR.Nombre("El nombre es incorrecto"));
		}
		if (elemento.validity.patternMismatch) {
			error2(elemento, ERROR.Nombre("Debe tener entre 5 y 15 caract"));
		}	
		return false;
	}
	return true;
}

function validarApellido() {
	var elemento = document.getElementById("apellido");
	if (!elemento.checkValidity()) {
		if (elemento.validity.valueMissing) {
			error2(elemento, ERROR.Apellido("El apellido es incorrecto"));
		}
		if (elemento.validity.patternMismatch) {
			error2(elemento, ERROR.Apellido("Debe tener entre 5 y 10 caract"));
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
			error2(elemento, ERROR.Telefono("El telefono es incorrecto"));
		}
		if (elemento.validity.patternMismatch) {
			error2(elemento, ERROR.Telefono("El telefono debe contener 9 digitos"));
		}
		if (elemento.validity.typeMismatch) {
			error2(elemento, ERROR.Telefono("No es numero"));
		}
		return false;
	}
	return true;
}

function validarEmail() {
		var elemento = document.getElementById("email");
		if (!elemento.checkValidity()) {
			if (elemento.validity.valueMissing) {
				error2(elemento, ERROR.Email("Email es incorrecto"));
			}
			if (elemento.validity.patternMismatch) {
				error2(elemento, ERROR.Email("Email no encontrado"));
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

function validar(e) {
	borrarError();
	function confirmar(mensaje) {
		alertify.confirm(mensaje).set('labels', {ok:'Ok!', cancel:'Cancel'}).showModal(); 
	} 
	if (validarNombre() && validarApellido() && validarTelefono() && validarEmail() && confirmar("Desea enviar sus datos")) {
		return true;
	} else {
		e.preventDefault();
		return false;
	}
}

// function error(elemento) {
// 	document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
// 	elemento.validationMessage;
// 	elemento.className = "error";
// 	elemento.focus();
// }

function error2 (elemento, mensaje) {
	// document.getElementById("mensajeError").innerHTML = mensaje;
	elemento.className = "error";
	elemento.focus();
}

function borrarError() {
	var formulario = document.forms[0];
	for (var i = 0; i <formulario.elements.length; i++) {
		formulario.elements[i].className = "";
	}
}