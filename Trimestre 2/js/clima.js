// js/clima.js (Asegúrate de que este archivo exista y contenga este código)
document.addEventListener('DOMContentLoaded', () => {
    // Función para cargar y mostrar el clima actual por horas
    function loadCurrentWeather(containerId) {
        // Asegúrate de que la ruta al JSON sea correcta
        fetch('js/current_clima.json') 
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const horas = ["00:00", "08:00", "12:00", "18:00"];
                const contenedor = document.getElementById(containerId);
                if (!contenedor) {
                    console.error(`Contenedor con ID ${containerId} no encontrado.`);
                    return;
                }
                contenedor.innerHTML = ''; // Limpiar contenido anterior

                // Acceso a forecast.forecastday[0].hour (primer día del pronóstico)
                const forecast = data.forecast.forecastday[0].hour;

                horas.forEach(hora => {
                    const horaObj = forecast.find(h => h.time.endsWith(hora));
                    if (horaObj) {
                        const col = document.createElement("div");
                        col.className = "col-md-3 mb-3"; 
                        col.innerHTML = `
                            <div class="card text-center h-100">
                                <div class="card-header">${hora}</div>
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <img src="${horaObj.condition.icon}" alt="${horaObj.condition.text}" class="img-fluid mb-2" style="max-height: 64px;">
                                        <p class="card-text">${horaObj.condition.text}</p>
                                    </div>
                                    <div>
                                        <p class="card-text"><strong>${horaObj.temp_c}°C</strong></p>
                                        <p class="card-text">Viento: ${horaObj.wind_kph} km/h</p>
                                        <p class="card-text">Precipitación: ${horaObj.chance_of_rain || 0}%</p>
                                    </div>
                                </div>
                            </div>
                        `;
                        contenedor.appendChild(col);
                    }
                });
            })
            .catch(error => console.error('Error cargando el clima actual:', error));
    }

    // Cargar clima en la página principal (index.html)
    if (document.getElementById('clima_horas')) {
        loadCurrentWeather('clima_horas');
    }

    // Cargar clima en la página del clima (clima.html)
    if (document.getElementById('clima_horas_clima_page')) {
        loadCurrentWeather('clima_horas_clima_page');
        
        const citySelector = document.getElementById('citySelector');
        if (citySelector) {
            citySelector.addEventListener('change', (event) => {
                console.log(`Ciudad seleccionada: ${event.target.value}. Mostrando datos de Málaga.`);
                loadCurrentWeather('clima_horas_clima_page'); 
            });
        }
    }
});