function saveDataToLocalStorage() {
    localStorage.setItem('sectoresData', JSON.stringify(sectores));
}

function loadDataFromLocalStorage() {
    const savedData = localStorage.getItem('sectoresData');
    if (savedData) {
        sectores = JSON.parse(savedData);
    }else{
        saveDataToLocalStorage();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadDataFromLocalStorage()
    const map = L.map('map').setView([18.4861, -69.9312], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const sectorSelect = document.getElementById("sector-select");
    const formContainer = document.getElementById("form-container");
    const addSectorBtn = document.getElementById("add-sector-btn");
    const newSectorContainer = document.getElementById("new-sector-container");
    const saveSectorBtn = document.getElementById("save-sector-btn");
    const deleteContainerBtn = document.getElementById("delete-container-btn");
    let selectedSector = null;
    let selectedContainerIndex = null;

    newSectorContainer.style.display = "none";
    formContainer.style.display = "none";

    function updateSectorSelect() {
        sectorSelect.innerHTML = '<option value="">Seleccione...</option>';
        sectores.forEach((sector, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.text = sector.nombre;
            sectorSelect.appendChild(option);
        });
    }

    updateSectorSelect();

    addSectorBtn.addEventListener("click", function () {
        newSectorContainer.style.display = "block";
    });

    saveSectorBtn.addEventListener("click", function () {
        const newSectorName = document.getElementById("new-sector").value.trim();
        if (newSectorName) {
            sectores.push({ nombre: newSectorName, contenedores: [] });
            updateSectorSelect();
            newSectorContainer.style.display = "none";
            document.getElementById("new-sector").value = "";

            document.getElementById("capacidad").textContent = "";
            document.getElementById("horario").textContent = "";
            document.getElementById("dias").textContent = "";

            saveDataToLocalStorage()
        } else {
            alert("Por favor, ingrese un nombre para el sector.");
        }
    });

    sectorSelect.addEventListener("change", function () {
        selectedSector = sectores[sectorSelect.value];
        formContainer.style.display = selectedSector ? "block" : "none";
        loadSectorContainers(selectedSector);
    });

    function loadSectorContainers(sector) {
        // Limpiar marcadores existentes
        map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        // Cargar contenedores del sector
        sector.contenedores.forEach((contenedor, index) => {
            const marker = L.marker([contenedor.lat, contenedor.lng]).addTo(map);
            marker.bindPopup(`<b>Capacidad:</b> ${contenedor.capacidad}<br><b>Horario de Recolección:</b> ${contenedor.horario}<b>Dias de Recolección:</b> ${contenedor.horario}`);

            marker.on('click', function () {
                document.getElementById("capacidad").value = contenedor.capacidad;
                document.getElementById("horario").value = contenedor.horario;
                document.getElementById("dias").value = contenedor.dias;
                selectedContainerIndex = index;

                document.getElementById("container-form").dataset.lat = contenedor.lat;
                document.getElementById("container-form").dataset.lng = contenedor.lng;
            });
        });
    }

    map.on('click', function (e) {
        if (selectedSector) {
            loadSectorContainers(selectedSector)
            const lat = e.latlng.lat;
            const lng = e.latlng.lng;
            L.marker([lat, lng]).addTo(map);

            document.getElementById("container-form").dataset.lat = lat;
            document.getElementById("container-form").dataset.lng = lng;
            selectedContainerIndex = null;
            formContainer.style.display = "block";

        } else {
            alert("Por favor, seleccione un sector.");
        }
    });

    document.getElementById("container-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const capacidad = document.getElementById("capacidad").value;
        const horario = document.getElementById("horario").value;
        const dias = document.getElementById("dias").value;
        const lat = parseFloat(this.dataset.lat);
        const lng = parseFloat(this.dataset.lng);

        if (capacidad && horario && dias) {
            const contenedorData = { lat, lng, capacidad, horario, dias };

            if (selectedContainerIndex !== null) {
                selectedSector.contenedores[selectedContainerIndex] = contenedorData;
                alert("Contenedor actualizado con éxito.");
            } else {
                selectedSector.contenedores.push(contenedorData);
                alert("Contenedor agregado con éxito.");
            }

            loadSectorContainers(selectedSector);
            saveDataToLocalStorage()
            this.reset();
            
        } else {
            alert("Por favor, complete todos los campos.");
        }
    });

    deleteContainerBtn.addEventListener("click", function () {
        if (selectedContainerIndex !== null) {
            selectedSector.contenedores.splice(selectedContainerIndex, 1);
            alert("Contenedor eliminado con éxito.");
            loadSectorContainers(selectedSector);
            document.getElementById("container-form").reset();
            selectedContainerIndex = null;

            saveDataToLocalStorage()
        } else {
            alert("Seleccione un contenedor para eliminar.");
        }
    });
});
