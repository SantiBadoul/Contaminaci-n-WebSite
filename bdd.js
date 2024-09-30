// Obtener referencia a la tabla
const tableBody = document.getElementById('table-body');

// Datos de ejemplo
const paises = ["Afganistán", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Bahréin", "Bangladés", "Bangladesh", "Bolivia", "Bosnia y Herzegovina", "Camboya", "Chile", "China", "Colombia", "Corea del Norte", "Ecuador", "Egipto", "El Salvador", "Etiopía", "Filipinas", "Ghana", "Guatemala", "Honduras", "India", "Indonesia", "Irak", "Irán", "Israel", "Jordania", "Kazajistán", "Kirguistán", "Kuwait", "Laos", "Líbano", "Malasia", "Maldivas", "Marruecos", "Mongolia", "Myanmar", "Nepal", "Nigeria", "Pakistán", "Perú", "Rusia", "Senegal", "Serbia", "Sri Lanka", "Sudáfrica", "Sudán", "Tailandia", "Tayikistán", "Turkmenistán", "Turquía", "Ucrania", "Uzbekistán", "Venezuela", "Vietnam"];
const ciudades = ["Kabul", "Riad", "Argel", "Buenos Aires", "Ereván", "Manama", "Daca", "Daca", "La Paz", "Sarajevo", "Phnom Penh", "Santiago", "Beijing", "Bogotá", "Pionyang", "Quito", "El Cairo", "San Salvador", "Addis Abeba", "Manila", "Accra", "Ciudad de Guatemala", "Tegucigalpa", "Delhi", "Yakarta", "Bagdad", "Teherán", "Tel Aviv", "Amán", "Almaty", "Bishkek", "Ciudad de Kuwait", "Vientian", "Beirut", "Kuala Lumpur", "Malé", "Casablanca", "Ulán Bator", "Rangún", "Katmandú", "Lagos", "Lahore", "Lima", "Moscú", "Dakar", "Belgrado", "Colombo", "Johannesburgo", "Jartum", "Bangkok", "Dusambé", "Asjabad", "Estambul", "Kiev", "Tashkent", "Caracas", "Hanói"];
const elementos = ["Aire", "Aire", "Aire, Agua", "Aire, Agua", "Agua, Aire", "Aire", "Aire", "Aire", "Aire, Agua", "Aire", "Aire, Agua", "Aire", "Aire, Agua", "Aire, Agua", "Aire, Agua", "Aire", "Aire, Agua", "Aire, Agua", "Aire, Agua", "Aire, Agua. Residuos", "Aire, Agua", "Aire, Agua", "Aire", "Aire, Agua", "Aire, Agua", "Aire", "Aire, Agua", "Aire, Agua", "Aire, Agua", "Aire, Agua", "Aire", "Aire, Agua", "Aire, Agua", "Aire", "Aire, Agua, Residuos", "Aire, Agua", "Aire", "Aire, Agua", "Aire", "Aire, Agua y Residuos", "Aire", "Aire, Agua", "Aire, Agua", "Aire, Agua, Residuos", "Aire", "Aire, Agua", "Aire, Agua", "Aire, Agua", "Aire, Agua", "Aire, Agua", "Aire, Agua", "Aire, Agua", "Aire, Agua", "Aire, Agua, Residuos", "Aire"];
const contaminacion = ["PM2.5 promedio anual > 35 µg/m³", "PM2.5 promedio anual > 50 µg/m³", "Sin datos específicos de PM2.5.", "Sin datos específicos de PM2.5.", "PM2.5 promedio anual > 30 µg/m³", "PM2.5 y PM10 altos, con un promedio anual > 50 µg/m³", "PM2.5 promedio anual > 90 µg/m³", "PM2.5 promedio anual > 90 µg/m³", "Sin datos específicos de PM2.5.", "PM2.5 promedio anual > 20 µg/m³", "Sin datos específicos de PM2.5.", "Sin datos específicos de PM2.5.", "PM2.5 promedio anual > 60 µg/m³", "Sin datos específicos de PM2.5.", "Sin datos de PM2.5 específicos", "Sin datos específicos de PM2.5.", "PM10 y agua altamente contaminados, con PM2.5 promedio > 45 µg/m³", "Sin datos específicos de PM2.5.", "Sin datos específicos de PM2.5", "PM2.5 promedio anual > 35 µg/m", "Sin datos específicos de PM2.5.", "Sin datos específicos de PM2.5.", "Sin datos específicos de PM2.5.", "PM2.5 promedio anual > 40 µg/m³", "PM2.5 promedio anual > 60 µg/m³", "Sin datos específicos de PM2.5.", "PM2.5 promedio anual > 40 µg/m³", "Sin datos específicos de PM2.5.", "Sin datos específicos de PM2.5.", "PM2.5 promedio anual > 40 µg/m³", "Sin datos específicos de PM2.5.", "Sin datos específicos de PM2.5.", "Sin datos específicos de PM2.5.", "PM10 y agua altamente contaminados, con PM2.5 promedio > 60 µg/m³", "Sin datos específicos de PM2.5.", "PM10 y agua altamente contaminados, con PM2.5 promedio > 45 µg/m³", "PM10 y agua altamente contaminados, con PM2.5 promedio > 45 µg/m³", "Sin datos específicos de PM2.5.", "PM10 y agua altamente contaminados, con PM2.5 promedio > 45 µg/m³", "PM10 y agua altamente contaminados, con PM2.5 promedio > 45 µg/m³", "PM2.5 promedio anual > 45 µg/m³", "Sin datos específicos de PM2.5.", "PM2.5 promedio anual > 35 µg/m³", "Sin datos específicos de PM2.5.", "Sin datos específicos de PM2.5.", "PM2.5 promedio anual > 40 µg/m³", "Sin datos específicos de PM2.5.", "PM2.5 promedio anual > 50 µg/m³", "PM2.5 promedio anual > 50 µg/m³", "PM2.5 promedio anual > 50 µg/m³", "PM2.5 promedio anual > 50 µg/m³", "PM2.5 promedio anual > 50 µg/m³", "PM2.5 promedio anual > 50 µg/m³"];

function populateTable() {
    for (let i = 0; i < paises.length; i++) {
        const row = document.createElement('tr');

        const cell1 = document.createElement('td');
        cell1.textContent = paises[i];
        row.appendChild(cell1);

        const cell2 = document.createElement('td');
        cell2.textContent = ciudades[i];
        row.appendChild(cell2);

        const cell3 = document.createElement('td');
        cell3.textContent = elementos[i];
        row.appendChild(cell3);

        const cell4 = document.createElement('td');
        cell4.textContent = contaminacion[i];
        row.appendChild(cell4);

        // Agregar la fila al cuerpo de la tabla
        tableBody.appendChild(row);
    }
}

// Llamar a la función para llenar la tabla al cargar la página
populateTable();