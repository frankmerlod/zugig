document.addEventListener("DOMContentLoaded", function () {
    let enConstruccion = document.querySelectorAll(".enConstruccion");

    enConstruccion.forEach(element => {
        // Agregar un event listener a cada elemento
        element.addEventListener("click", (e) => {
            e.preventDefault();
            showError("Página en construcción");
        });
    });

    function showError(message) {
        alert(message);
    }
});