/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const descripcionesMinisterios = {
    "Desarrollo Agrario y Riego": "Encargado de las políticas agrarias, desarrollo rural y gestión de recursos hídricos.",
    "Ambiente": "Promueve la conservación del ambiente, el desarrollo sostenible y el uso racional de los recursos naturales.",
    "Comercio Exterior y Turismo": "Fomenta el comercio internacional y el desarrollo del turismo en el Perú.",
    "Defensa": "Responsable de la defensa nacional, las Fuerzas Armadas y la seguridad del territorio peruano.",
    "Economía y Finanzas": "Gestiona las finanzas públicas, la política económica y la recaudación tributaria.",
    "Educación": "Encargado de las políticas educativas, la formación docente y la gestión escolar.",
    "Energía y Minas": "Regula y promueve las actividades energéticas y mineras del país.",
    "Interior": "Responsable del orden interno, la seguridad ciudadana y la gestión migratoria.",
    "Justicia y Derechos Humanos": "Promueve el acceso a la justicia y la protección de los derechos humanos.",
    "Mujer y Poblaciones Vulnerables": "Trabaja por la igualdad de género y la protección de grupos vulnerables.",
    "Producción": "Fomenta la actividad productiva, la pesca y la industria nacional.",
    "Relaciones Exteriores": "Encargado de la política exterior y las relaciones internacionales del Perú.",
    "Salud": "Gestiona las políticas de salud pública y la atención médica a la población.",
    "Trabajo y Promoción del Empleo": "Promueve el empleo digno y las relaciones laborales armoniosas.",
    "Transportes y Comunicaciones": "Responsable de la infraestructura de transportes y las telecomunicaciones.",
    "Vivienda, Construcción y Saneamiento": "Gestiona las políticas de vivienda y el acceso a servicios básicos.",
    "Cultura": "Promueve y protege el patrimonio cultural del Perú.",
    "Desarrollo e Inclusión Social": "Implementa programas de inclusión social y lucha contra la pobreza."
};

function cargarListaMinisterios() {
    const listaContainer = document.getElementById('lista-ministerios');
    listaContainer.innerHTML = '';

    const ministeriosOrdenados = [...ministerios].sort((a, b) => a.nombre.localeCompare(b.nombre));

    ministeriosOrdenados.forEach(ministerio => {
        const ministerioItem = document.createElement('div');
        ministerioItem.className = 'ministerio-item';
        ministerioItem.innerHTML = `
            <img src="${ministerio.imagen}" alt="${ministerio.nombre}" class="ministerio-img">
            <div class="ministerio-info">
                <h3 class="ministerio-nombre">${ministerio.nombre}</h3>
                <p class="ministerio-desc">${descripcionesMinisterios[ministerio.nombre] || 'Ministerio del Gobierno del Perú'}</p>
            </div>
            <button class="ministerio-btn" onclick="window.open('${ministerio.url}', '_blank')">Visitar Sitio</button>
        `;
        listaContainer.appendChild(ministerioItem);
    });

    actualizarEstadisticas();
}

function filtrarPorLetra() {
    const letraSeleccionada = document.getElementById('filtro-letra').value;
    const listaContainer = document.getElementById('lista-ministerios');

    if (letraSeleccionada === 'todas') {
        cargarListaMinisterios();
        return;
    }

    const ministeriosFiltrados = ministerios.filter(ministerio =>
        ministerio.nombre.startsWith(letraSeleccionada)
    );

    listaContainer.innerHTML = '';

    if (ministeriosFiltrados.length === 0) {
        listaContainer.innerHTML = '<p>No hay ministerios que comiencen con la letra seleccionada.</p>';
        return;
    }

    ministeriosFiltrados.forEach(ministerio => {
        const ministerioItem = document.createElement('div');
        ministerioItem.className = 'ministerio-item';
        ministerioItem.innerHTML = `
            <img src="${ministerio.imagen}" alt="${ministerio.nombre}" class="ministerio-img">
            <div class="ministerio-info">
                <h3 class="ministerio-nombre">${ministerio.nombre}</h3>
                <p class="ministerio-desc">${descripcionesMinisterios[ministerio.nombre] || 'Ministerio del Gobierno del Perú'}</p>
            </div>
            <button class="ministerio-btn" onclick="window.open('${ministerio.url}', '_blank')">Visitar Sitio</button>
        `;
        listaContainer.appendChild(ministerioItem);
    });
}

function ordenarMinisterios() {
    const criterio = document.getElementById('orden').value;
    const listaContainer = document.getElementById('lista-ministerios');

    let ministeriosOrdenados = [...ministerios];

    switch (criterio) {
        case 'nombre-asc':
            ministeriosOrdenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'nombre-desc':
            ministeriosOrdenados.sort((a, b) => b.nombre.localeCompare(a.nombre));
            break;
    }

    listaContainer.innerHTML = '';

    ministeriosOrdenados.forEach(ministerio => {
        const ministerioItem = document.createElement('div');
        ministerioItem.className = 'ministerio-item';
        ministerioItem.innerHTML = `
            <img src="${ministerio.imagen}" alt="${ministerio.nombre}" class="ministerio-img">
            <div class="ministerio-info">
                <h3 class="ministerio-nombre">${ministerio.nombre}</h3>
                <p class="ministerio-desc">${descripcionesMinisterios[ministerio.nombre] || 'Ministerio del Gobierno del Perú'}</p>
            </div>
            <button class="ministerio-btn" onclick="window.open('${ministerio.url}', '_blank')">Visitar Sitio</button>
        `;
        listaContainer.appendChild(ministerioItem);
    });
}

function actualizarEstadisticas() {
    document.getElementById('total-ministerios').textContent = ministerios.length;

    const conteoLetras = {};
    ministerios.forEach(ministerio => {
        const primeraLetra = ministerio.nombre.charAt(0);
        conteoLetras[primeraLetra] = (conteoLetras[primeraLetra] || 0) + 1;
    });

    let letraMasComun = '';
    let maxConteo = 0;

    for (const letra in conteoLetras) {
        if (conteoLetras[letra] > maxConteo) {
            maxConteo = conteoLetras[letra];
            letraMasComun = letra;
        }
    }

    document.getElementById('letra-mas-comun').textContent = letraMasComun;

    let nombreMasLargo = '';
    let maxLongitud = 0;

    ministerios.forEach(ministerio => {
        if (ministerio.nombre.length > maxLongitud) {
            maxLongitud = ministerio.nombre.length;
            nombreMasLargo = ministerio.nombre;
        }
    });

    document.getElementById('nombre-mas-largo').textContent = maxLongitud + " caracteres";
}

document.addEventListener('DOMContentLoaded', cargarListaMinisterios);


