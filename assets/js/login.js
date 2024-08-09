document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombreUsuario = document.getElementById("login-nombreUsuario").value;
    const contrasena = document.getElementById("login-contrasena").value;

    const users = loadUsersFromLocalStorage();
    const user = users.find(u => u.nombreUsuario === nombreUsuario && u.contrasena === contrasena);

    if (user) {
        if (user.rol === "admin") {
            window.location.href = "../pages/GestionContenedores.html";
        } else {
            window.location.href = "../pages/VistaContenedores.html";
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Nombre de usuario o contraseña incorrectos"
          });
    }
});
