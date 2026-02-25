document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    // Credenciales de ejemplo
    const validEmail = "test@test.com";
    const validPassword = "123456";

    if(email === validEmail && password === validPassword) {
        error.style.color = "green";
        error.textContent = "Inicio de sesión exitoso ✔";
        
        setTimeout(() => {
            alert("Bienvenido!");
        }, 500);

    } else {
        error.style.color = "red";
        error.textContent = "Correo o contraseña incorrectos";
    }
});