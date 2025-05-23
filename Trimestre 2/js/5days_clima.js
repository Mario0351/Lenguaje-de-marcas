document.addEventListener('DOMContentLoaded', () => {
    // Solo ejecutar si estamos en la página clima.html
    if (document.getElementById('forecast_5_days')) {
        fetch('js/5days_clima.json')
            .then(response => response.json())
            .then(data => {
                const forecastContainer = document.getElementById('forecast_5_days');
                forecastContainer.innerHTML = ''; // Limpiar contenido anterior

                const days = data.forecast.forecastday;

                days.forEach(day => {
                    const date = new Date(day.date);
                    const options = { weekday: 'long', day: 'numeric', month: 'short' };
                    const formattedDate = date.toLocaleDateString('es-ES', options);

                    const col = document.createElement('div');
                    col.className = 'col-md-4 col-lg-3 mb-4'; // Responsive para 3-4 columnas

                    col.innerHTML = `
                        <div class="card text-center h-100">
                            <div class="card-header">
                                <h5>${formattedDate}</h5>
                            </div>
                            <div class="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <img src="${day.day.condition.icon}" alt="${day.day.condition.text}" class="img-fluid mb-2" style="max-height: 64px;">
                                    <p class="card-text">${day.day.condition.text}</p>
                                </div>
                                <div>
                                    <p class="card-text">Max: <strong>${day.day.maxtemp_c}°C</strong></p>
                                    <p class="card-text">Min: <strong>${day.day.mintemp_c}°C</strong></p>
                                    <p class="card-text">Viento: ${day.day.maxwind_kph} km/h</p>
                                    <p class="card-text">Precipitación: ${day.day.daily_chance_of_rain || 0}%</p>
                                </div>
                            </div>
                        </div>
                    `;
                    forecastContainer.appendChild(col);
                });
            })
            .catch(error => console.error('Error cargando la previsión de 5 días:', error));
    }
});