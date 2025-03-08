// JavaScript para el carrusel
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const size = images[0].clientWidth;

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    carouselImages.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselImages.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// JavaScript para el formulario de reserva
document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const personas = document.getElementById('personas').value;
    const mensaje = document.getElementById('mensaje').value;

    const whatsappMessage = `Hola, me gustaría reservar un tour en kayak. Aquí están mis detalles:
    - Nombre: ${nombre}
    - Correo Electrónico: ${email}
    - Teléfono: ${telefono}
    - Fecha de Reserva: ${fecha}
    - Número de Personas: ${personas}
    - Comentarios Adicionales: ${mensaje}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
});
