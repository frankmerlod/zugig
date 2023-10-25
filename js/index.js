document.addEventListener("DOMContentLoaded", function () {
    const openSignUp = document.querySelector(".signUp");
    const openAddd = document.querySelector('.addd');
    const openAddd2 = document.querySelector('.addd2');
    const modalSignUp = document.querySelector(".sec-modal-signup");
    const modalAddd = document.querySelector(".sec-modal-address")
    const modalClose = document.querySelector(".modal-close");

    openSignUp.addEventListener("click", (e) => {
        e.preventDefault();
        modalSignUp.classList.add("modal-show");
    });

    modalClose.addEventListener("click", (e) => {
        e.preventDefault();
        modalSignUp.classList.remove("modal-show");
    });

    modalSignUp.addEventListener("click", (e) => {
        // Comprobar si el clic ocurrió fuera del contenido del modal
        if (e.target === modalSignUp) {
            modalSignUp.classList.remove("modal-show");
        }
        });


        // sec-modal-address
        openAddd.addEventListener("click", (e) => {
            e.preventDefault();
            modalAddd.classList.add("modal-show");
        });

        openAddd2.addEventListener("click", (e) => {
            e.preventDefault();
            modalAddd.classList.add("modal-show");
        });
    
        modalClose.addEventListener("click", (e) => {
            e.preventDefault();
            modalAddd.classList.remove("modal-show");
        });
    
        modalAddd.addEventListener("click", (e) => {
            // Comprobar si el clic ocurrió fuera del contenido del modal
            if (e.target === modalAddd) {
                modalAddd.classList.remove("modal-show");
            }
            });

});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const checkbox = document.getElementById("checkbox");

        if (name.trim() === "") {
            showError("Por favor, ingresa tu nombre");
        } else if (username.trim() === "") {
            showError("Por favor, ingresa un nombre de usuario");
        } else if (email.trim() === "" || !isValidEmail(email)) {
            showError("Por favor, ingresa un email válido");
        } else if (password.length < 6) {
            showError("La contraseña debe tener al menos 6 caracteres");
        } else if (!checkbox.checked) {
            showError("Debes aceptar los términos y condiciones");
        } else {
            form.submit();
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



