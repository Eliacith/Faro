document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-effect");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9; // Detecta cuando el elemento está casi en pantalla

        elements.forEach(element => {
            const boxTop = element.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para inicializar cuando carga la página
});
