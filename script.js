document.addEventListener('DOMContentLoaded', function() {
    // Elementos del menú
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    // Toggle para el menú en móviles
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('open');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('open');
        });
    });
    
    // Cerrar menú si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('open')) {
            menuToggle.classList.remove('active');
            mainNav.classList.remove('open');
        }
    });
    
    // Botón volver arriba
    const backToTopButton = document.getElementById('back-to-top');
    
    // Mostrar u ocultar botón basado en el scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Efecto de scroll suave para los enlaces de anclaje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});