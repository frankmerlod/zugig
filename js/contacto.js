document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const usernameField = document.getElementById("username");
    let username = "";

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const checkbox = document.getElementById("checkbox");
        const message = document.getElementById("message").value;

        if (name.trim() === "") {
            showError("Por favor, ingresa tu nombre");
        } else if (usernameField.value.trim() === "") {
            showError("Por favor, ingresa un nombre de usuario");
        } else if (email.trim() === "" || !isValidEmail(email)) {
            showError("Por favor, ingresa un email válido");
        } else if (message.trim() === "") {
            showError("Debes ingresar un mensaje de contacto");
        } else if (!checkbox.checked) {
            showError("Debes aceptar los términos y condiciones");
        } else {
            // Si todos los campos están completos y válidos, guardar el nombre de usuario y redirigir
            username = usernameField.value;
            window.location.href = `./contacto.html`;
        }
    });

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    function showError(message) {
        alert(message);
    }

    
});

