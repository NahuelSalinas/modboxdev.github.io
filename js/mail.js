  document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    var mensajeCompleto = "mailto:proyectomodbox@gmail.com?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(mensaje);

    window.location.href = mensajeCompleto;
  });