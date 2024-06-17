document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
                setTimeout(() => {
                    slide.classList.add('active'); // Agregamos la clase active después de que la diapositiva se muestre
                }, 100); // Un pequeño retraso para asegurar que la diapositiva se muestre antes de agregar la clase
            } else {
                slide.classList.remove('active'); // Removemos la clase active de las otras diapositivas
                setTimeout(() => {
                    slide.style.display = 'none'; // Ocultamos la diapositiva después de que la transición termine
                }, 500); // La duración de la transición es de 0.5 segundos
            }
        });
    }
    

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Mostrar el primer slide al cargar la página
    showSlide(currentSlide);

    // Agregar eventos de clic para los botones de navegación
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Autoplay del slider (cambio automático de imágenes cada 3 segundos)
    setInterval(nextSlide, 6000);
});
