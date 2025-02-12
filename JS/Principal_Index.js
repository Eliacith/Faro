function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}


window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const btnSubir = document.getElementById('btn-subir');

    // Añadir sombra a la barra de navegación si se hace scroll hacia abajo
    if (window.scrollY > 50) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
    
    // Mostrar el botón de subir después de 300px de scroll
    if (window.scrollY > 300) {
        btnSubir.style.display = 'block';
        btnSubir.style.opacity = '1';
        btnSubir.style.transform = 'scale(1)';
    } else {
        btnSubir.style.opacity = '0';
        btnSubir.style.transform = 'scale(0.8)';
        setTimeout(() => {
            btnSubir.style.display = 'none';
        }, 300);
    }
});
