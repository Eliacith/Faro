document.addEventListener("DOMContentLoaded", function() {
    const btnMostrar = document.getElementById("btn-validar-codigo");
    const contenedor = document.getElementById("content-oscuro-validar-codigo");
    const btnCerrar = document.getElementById("btn_cerrar");

    // Mostrar el contenedor
    btnMostrar.addEventListener("click", function() {
        contenedor.style.visibility = "visible"; // Asegurar que sea visible
        contenedor.classList.remove("ocultar");  // Quitar clase de cierre si la tiene
        contenedor.classList.add("mostrar");     // Agregar animación de entrada
    });

    // Cerrar el contenedor con animación
    btnCerrar.addEventListener("click", function() {
        contenedor.classList.remove("mostrar");  // Quitar la animación de entrada
        contenedor.classList.add("ocultar");     // Agregar la animación de cierre

        // Esperar que termine la animación antes de ocultarlo
        setTimeout(() => {
            contenedor.style.visibility = "hidden";
        }, 500); // Duración de la animación (debe coincidir con CSS)
    });
});
