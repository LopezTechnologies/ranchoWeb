// script.js
document.getElementById("consultationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Gracias por tu consulta! Nos pondremos en contacto contigo pronto.");
    this.reset(); // Limpia el formulario
});
