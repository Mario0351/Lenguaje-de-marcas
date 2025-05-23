const ciudadesClima = {
  malaga: {
    nombre: "Málaga",
    horas: [
      {hora:"00:00", temp_c:17, viento_kph:8, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/night/113.png", estado:"Despejado"},
      {hora:"08:00", temp_c:18, viento_kph:7, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png", estado:"Soleado"},
      {hora:"12:00", temp_c:24, viento_kph:12, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png", estado:"Soleado"},
      {hora:"18:00", temp_c:23, viento_kph:15, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png", estado:"Soleado"}
    ],
    max: 25, min: 16,
    prevision: [
      {fecha:"15/05", max:25, min:16, viento_kph:10, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"16/05", max:24, min:15, viento_kph:12, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"17/05", max:23, min:15, viento_kph:13, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"18/05", max:22, min:14, viento_kph:11, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"19/05", max:23, min:15, viento_kph:10, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
    ],
    alerta: ""
  },
  madrid: {
    nombre: "Madrid",
    horas: [
      {hora:"00:00", temp_c:12, viento_kph:10, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/night/116.png", estado:"Parcialmente nublado"},
      {hora:"08:00", temp_c:13, viento_kph:9, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/116.png", estado:"Parcialmente nublado"},
      {hora:"12:00", temp_c:19, viento_kph:15, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/116.png", estado:"Parcialmente nublado"},
      {hora:"18:00", temp_c:18, viento_kph:18, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/116.png", estado:"Parcialmente nublado"}
    ],
    max: 20, min: 11,
    prevision: [
      {fecha:"15/05", max:20, min:11, viento_kph:12, precip_mm:0, estado:"Parcialmente nublado", icono:"https://cdn.weatherapi.com/weather/64x64/day/116.png"},
      {fecha:"16/05", max:19, min:10, viento_kph:13, precip_mm:0, estado:"Parcialmente nublado", icono:"https://cdn.weatherapi.com/weather/64x64/day/116.png"},
      {fecha:"17/05", max:18, min:9, viento_kph:14, precip_mm:0, estado:"Parcialmente nublado", icono:"https://cdn.weatherapi.com/weather/64x64/day/116.png"},
      {fecha:"18/05", max:17, min:8, viento_kph:15, precip_mm:0, estado:"Parcialmente nublado", icono:"https://cdn.weatherapi.com/weather/64x64/day/116.png"},
      {fecha:"19/05", max:18, min:9, viento_kph:13, precip_mm:0, estado:"Parcialmente nublado", icono:"https://cdn.weatherapi.com/weather/64x64/day/116.png"}
    ],
    alerta: "Aviso de viento fuerte para el 16/05"
  },
  barcelona: {
    nombre: "Barcelona",
    horas: [
      {hora:"00:00", temp_c:15, viento_kph:7, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/night/113.png", estado:"Despejado"},
      {hora:"08:00", temp_c:16, viento_kph:8, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png", estado:"Soleado"},
      {hora:"12:00", temp_c:21, viento_kph:10, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png", estado:"Soleado"},
      {hora:"18:00", temp_c:20, viento_kph:12, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png", estado:"Soleado"}
    ],
    max: 22, min: 14,
    prevision: [
      {fecha:"15/05", max:22, min:14, viento_kph:9, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"16/05", max:21, min:13, viento_kph:10, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"17/05", max:20, min:12, viento_kph:11, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"18/05", max:19, min:11, viento_kph:12, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"19/05", max:20, min:12, viento_kph:10, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
    ],
    alerta: ""
  },
  sevilla: {
    nombre: "Sevilla",
    horas: [
      {hora:"00:00", temp_c:19, viento_kph:10, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/night/113.png", estado:"Despejado"},
      {hora:"08:00", temp_c:20, viento_kph:11, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png", estado:"Soleado"},
      {hora:"12:00", temp_c:28, viento_kph:13, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png", estado:"Soleado"},
      {hora:"18:00", temp_c:27, viento_kph:15, precip_mm:0, icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png", estado:"Soleado"}
    ],
    max: 29, min: 18,
    prevision: [
      {fecha:"15/05", max:29, min:18, viento_kph:12, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"16/05", max:28, min:17, viento_kph:13, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"17/05", max:27, min:16, viento_kph:14, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"18/05", max:26, min:15, viento_kph:15, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"},
      {fecha:"19/05", max:27, min:16, viento_kph:13, precip_mm:0, estado:"Soleado", icono:"https://cdn.weatherapi.com/weather/64x64/day/113.png"}
    ],
    alerta: ""
  }
};