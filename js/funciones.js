let btnEnviar = document.getElementById('btnEnviar');
let btnLimpiar = document.getElementById('btnLimpiar');
let nombre = document.getElementById('nombre');
let correo = document.getElementById('correo');
let comentario = document.getElementById('comentario');

function validarCorreo() {
  let correoValor = correo.value;
  let expresionRegular = /@/;
  let mensaje = document.getElementById("validaCorreo");
  
  if (expresionRegular.test(correoValor)) {
      mensaje.innerHTML = "";
  } else {
    mensaje.innerHTML = "- El correo electrónico no es válido.";
  }
}

function valida() {
  let mensajeNombre = document.getElementById("validaNombre");
  let mensajeCorreo = document.getElementById("validaCorreo");
  let mensajeComentario = document.getElementById("validaComentario");
  
  mensajeNombre.innerHTML = "";
  mensajeCorreo.innerHTML = "";
  mensajeComentario.innerHTML = "";
  
  if (nombre.value === '') {
    mensajeNombre.innerHTML = "- El nombre está vacío.";
  }
  
  if (correo.value === '') {
    mensajeCorreo.innerHTML = "- El correo está vacío.";
  } else {
    validarCorreo();
  }
  
  if (comentario.value === '') {
    mensajeComentario.innerHTML = "- El comentario está vacío.";
  }
  
 
}

btnEnviar.addEventListener('click', function() {
  valida();
});

btnLimpiar.addEventListener('click', function() {
  nombre.value = "";
  correo.value = "";
  comentario.value = "";
  document.getElementById("validaNombre").innerHTML = "";
  document.getElementById("validaCorreo").innerHTML = "";
  document.getElementById("validaComentario").innerHTML = "";
});



  