document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let intervalId = null;
    let isTransitioning = false; // Variable para evitar transiciones simultáneas

    function showSlide(index) {
        if (isTransitioning) return; // Evitar transiciones si ya estamos en una transición

        isTransitioning = true; // Iniciar transición
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
        setTimeout(() => {
            isTransitioning = false; // Finalizar transición después de 0.5 segundos
        }, 600); // Duración de la transición + pequeño margen
    }

    function nextSlide() {
        if (isTransitioning) return; // Evitar cambios si ya estamos en una transición
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        if (isTransitioning) return; // Evitar cambios si ya estamos en una transición
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function startAutoPlay() {
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 10000);
    }

    // Mostrar el primer slide al cargar la página
    showSlide(currentSlide);

    // Agregar eventos de clic para los botones de navegación
    document.querySelector('.next').addEventListener('click', function() {
        nextSlide();
        startAutoPlay();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        prevSlide();
        startAutoPlay();
    });

    // Iniciar autoplay al cargar la página
    startAutoPlay();

    // Manejar la búsqueda
    document.querySelector('.search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const query = event.target.q.value.trim().toLowerCase();
        const posters = document.querySelectorAll('.poster');

        for (const poster of posters) {
            const title = poster.getAttribute('data-title').toLowerCase();
            if (title.includes(query)) {
                const link = poster.querySelector('a').href;
                window.location.href = link;
                return;
            }
        }

        alert('No se encontraron resultados.');
    });
});
