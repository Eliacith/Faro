document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".digito");

    inputs.forEach((input, index) => {
        input.addEventListener("input", function () {
            // Solo permite números
            this.value = this.value.replace(/\D/g, "");

            // Si se escribe un número, pasa al siguiente input
            if (this.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", function (event) {
            // Si se presiona "Backspace" y el input está vacío, regresa al anterior
            if (event.key === "Backspace" && index > 0 && this.value === "") {
                inputs[index - 1].focus();
            }
        });
    });
});
