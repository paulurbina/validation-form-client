function validar() {
	var	nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var telefono = document.getElementById("telefono").value;
	var email = document.getElementById("email").value;
	var obsComen = document.getElementById("obsComen").value;
	var expresion = /\w+@\w+\.+[a-z]/;

	if (nombre === "" || apellido === "" || telefono === "" || email === "" || comentarios === "") {
		// alertify.alert('Aviso', 'Todos lo campos son obligatorios!');
		swal('Aviso', 'Todos los campos son obligatorios!', "error");
		return false;
	} else if (String(nombre).length>10) {
		swal('Aviso', 'El nombre es muy largo...');
		return false;
	} else if (String(apellido).length > 30) {
		swal('Aviso', "El apellido es muy largo...");
		return false;
	} else if (telefono.length > 10 || isNaN(telefono)) {
		swal('Aviso', "Ingresar un numero valido...");
		return false;
	} else if (email.length > 30 || !expresion.test(email)) {
		swal('Aviso', "Ingresar email valido...");
		return false;
	} else if (String(obsComen).length > 300) {
		swal('Aviso',"Problema con el comentario ...");
	}
	return true;
}