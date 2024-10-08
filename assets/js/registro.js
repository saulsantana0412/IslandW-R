document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombreApellido = document.getElementById("nombreApellido").value;
    const nombreUsuario = document.getElementById("nombreUsuario").value;
    const contrasena = document.getElementById("contrasena").value;
    const confirmarContrasena = document.getElementById("confirmarContrasena").value;
    const correoElectronico = document.getElementById("correoElectronico").value;
    const numeroTelefonico = document.getElementById("numeroTelefonico").value;
    const rol = "normal"; // Asignar rol por defecto

    if (contrasena !== confirmarContrasena) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Las contraseñas no coinciden"
          });
        return;
    }

    const newUser = {
        nombreApellido,
        nombreUsuario,
        contrasena,
        correoElectronico,
        numeroTelefonico,
        rol
    };

    const users = loadUsersFromLocalStorage();
    users.push(newUser);
    localStorage.setItem('usersData', JSON.stringify(users));

    Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Registro exitoso. Redirigiendo..."
      });
    window.location.href = "../pages/VistaContenedores.html";
});
