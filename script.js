document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
                setTimeout(() => {
                    slide.classList.add('active');
                }, 100);
            } else {
                slide.classList.remove('active');
                setTimeout(() => {
                    slide.style.display = 'none';
                }, 500);
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

    // Autoplay del slider (cambio automático de imágenes cada 6 segundos)
    setInterval(nextSlide, 6000);
});
