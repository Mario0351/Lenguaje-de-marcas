// Script principal para mostrar clima y noticias en index.html

// Mostrar resumen del clima por horas
function mostrarClima() {
    climaLocal.horas.forEach(function(horaObj) {
        var sufijo = horaObj.hora.split(':')[0]; // "00", "08", "12", "18"
        document.getElementById('temp-' + sufijo).textContent = horaObj.temp_c;
        document.getElementById('wind-' + sufijo).textContent = horaObj.viento_kph;
        document.getElementById('precip-' + sufijo).textContent = horaObj.precip_mm;
        document.getElementById('icon-' + sufijo).src = horaObj.icono;
        document.getElementById('desc-' + sufijo).textContent = horaObj.estado;
    });
    document.getElementById('temp-max').textContent = climaLocal.max + "°C";
    document.getElementById('temp-min').textContent = climaLocal.min + "°C";
}

// Mostrar las últimas noticias
function mostrarNoticias() {
    var contenedor = document.getElementById('news-container');
    noticias.forEach(function(noticia) {
        var col = document.createElement('div');
        col.className = "col-md-4 mb-4";
        col.innerHTML = `
            <div class="card h-100">
                <img src="${noticia.imagen}" class="card-img-top" alt="Imagen noticia">
                <div class="card-body">
                    <h5 class="card-title">${noticia.titulo}</h5>
                    <p class="card-text">${noticia.descripcion}</p>
                    <a href="${noticia.url}" target="_blank" class="btn btn-primary btn-sm">Leer más</a>
                    <div class="text-muted mt-2">${noticia.fuente}</div>
                </div>
            </div>
        `;
        contenedor.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarClima();
    mostrarNoticias();
});