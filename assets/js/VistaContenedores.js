function loadDataFromLocalStorage() {
    const savedData = localStorage.getItem('sectoresData');
    if (savedData) {
        sectores = JSON.parse(savedData);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadDataFromLocalStorage()

    // Crear el mapa centrado en Santo Domingo
    const map = L.map('map').setView([18.4861, -69.9312], 13);

    // Añadir una capa de mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Llenar el combobox con los sectores
    const sectorSelect = document.getElementById("sector-select");
    sectores.forEach((sector, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = sector.nombre;
        sectorSelect.appendChild(option);
    });

    // Manejar el cambio de selección en el combobox
    sectorSelect.addEventListener("change", function () {
        // Eliminar los marcadores existentes
        map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        // Limpiar la información del contenedor
        document.getElementById("capacidad").innerHTML = "&nbsp;";
        document.getElementById("horario").innerHTML = "&nbsp;";
        document.getElementById("dias").innerHTML = "&nbsp;";

        // Obtener el sector seleccionado
        const selectedSector = sectores[sectorSelect.value];

        if (selectedSector) {
            // Agregar los contenedores del sector seleccionado al mapa
            selectedSector.contenedores.forEach(contenedor => {
                const marker = L.marker([contenedor.lat, contenedor.lng]).addTo(map);
                marker.bindPopup(`<b>Capacidad:</b> ${contenedor.capacidad}<br><b>Horario de Recolección:</b> ${contenedor.horario}<br><b>Dias de Recolección:</b> ${contenedor.dias}`);

                // Añadir evento para mostrar los datos del contenedor en la página
                marker.on('click', function () {
                    document.getElementById("capacidad").textContent = contenedor.capacidad;
                    document.getElementById("horario").textContent = contenedor.horario;
                    document.getElementById("dias").textContent = contenedor.dias;

                });
            });
        }
    });
});
