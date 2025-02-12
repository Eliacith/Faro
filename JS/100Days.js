$(document).ready(function () {
    $(".pic").on("click", function () {
        // Verificar si la imagen clickeada ya está activa
        if ($(this).hasClass("active")) {
            // Si está activa, quitar la clase 'active' y volver al estado original
            $(this).removeClass("active");
            $(".pic").removeClass("away"); // Asegura que las imágenes no activas sean visibles nuevamente
        } else {
            // Si no está activa, añadir la clase 'active' y ocultar las demás
            $(".pic").removeClass("active").addClass("away");
            $(this).removeClass("away").addClass("active");
        }
    });
});