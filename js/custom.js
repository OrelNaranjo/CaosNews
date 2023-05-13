/* ********* Función fecha actual y reloj ********* */
function showDateTime() {
  // Obtener el elemento de HTML para mostrar la fecha y el reloj
  var clockElement = document.getElementById("current_date");

  // Obtener la fecha actual
  var fecha = new Date();

  // Crear variables
  var opcionesFecha = { day: "numeric", month: "long", year: "numeric" };
  var opcionesHora = { hour: "numeric", minute: "numeric", second: "numeric" };

  // Obtener la fecha para Chile
  var dia = fecha.toLocaleDateString("es-CL", opcionesFecha);

  // Obtener la hora actual
  var hora = fecha.toLocaleTimeString("es-CL", opcionesHora);

  // Combinar la fecha y el reloj en variable
  var fechaCompleta = dia + " " + hora;

  // Mostrar la fecha y el reloj combinados en el elemento HTML
  clockElement.textContent = fechaCompleta;

  // Actualizar cada segundo
  setInterval(showDateTime, 1000);
}

/* ********* JQuery Personalizado ********* */
$(document).ready(function () {

  //Desvanecer Spinner de Carga
  $(".backcover").fadeOut(500);

  //Validaciones Formulario Contacto

  $('#contact-form').submit(function (event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Validar campos
    var nombre = $('#nombre').val().trim();
    var correo = $('#correo').val().trim();
    var telefono = $('#telefono').val().trim();
    var mensaje = $('#mensaje').val().trim();

    // Validar nombre
    if (nombre === '') {
      $('#nombre').addClass('is-invalid');
    } else if (!/^[a-zA-Z]+$/.test(nombre)) {
      $('#nombre').addClass('is-invalid');
    } else {
      $('#nombre').removeClass('is-invalid');
    }

    // Validar correo electrónico
    var correoPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoPattern.test(correo)) {
      $('#correo').addClass('is-invalid');
    } else {
      $('#correo').removeClass('is-invalid');
    }

    // Validar número de teléfono
    var telefonoPattern = /^\d{9}$/;
    if (!telefonoPattern.test(telefono)) {
      $('#telefono').addClass('is-invalid');
    } else {
      $('#telefono').removeClass('is-invalid');
    }

    // Validar mensaje
    if (mensaje === '') {
      $('#mensaje').addClass('is-invalid');
    } else {
      $('#mensaje').removeClass('is-invalid');
    }

    // Si todos los campos son válidos, se puede enviar el formulario
    if (nombre !== '' && correoPattern.test(correo) && telefonoPattern.test(telefono) && mensaje !== '') {
      // Carga la ventana modal
      $('#success-modal').modal('show');
    }
  });
});