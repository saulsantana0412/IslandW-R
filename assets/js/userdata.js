const users = [
    {
        nombreApellido: "Admin User",
        nombreUsuario: "admin",
        contrasena: "admin123",
        correoElectronico: "admin@example.com",
        numeroTelefonico: "1234567890",
        rol: "admin"
    },
    // Otros usuarios se agregarán aquí
];

// Función para guardar los usuarios en el localStorage
function saveUsersToLocalStorage() {
    localStorage.setItem('usersData', JSON.stringify(users));
}

// Función para cargar los usuarios desde el localStorage
function loadUsersFromLocalStorage() {
    const savedUsers = localStorage.getItem('usersData');
    if (savedUsers) {
        return JSON.parse(savedUsers);
    }
    return users;
}

// Inicializar la data en localStorage si no existe
if (!localStorage.getItem('usersData')) {
    saveUsersToLocalStorage();
}
