/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
const ministerios = [
    { nombre: "Desarrollo Agrario y Riego", url: "https://www.gob.pe/midagri", imagen: "imagenes/midagri.jpg" },
    { nombre: "Ambiente", url: "https://www.gob.pe/minam", imagen: "imagenes/minam.png" },
    { nombre: "Comercio Exterior y Turismo", url: "https://www.gob.pe/mincetur", imagen: "imagenes/mincetur.jpg" },
    { nombre: "Defensa", url: "https://www.gob.pe/mindef", imagen: "imagenes/mindef.png" },
    { nombre: "Economía y Finanzas", url: "https://www.gob.pe/mef", imagen: "imagenes/mef.png" },
    { nombre: "Educación", url: "https://www.gob.pe/minedu", imagen: "imagenes/minedu.jpg" },
    { nombre: "Energía y Minas", url: "https://www.gob.pe/minem", imagen: "imagenes/minem.jpg" },
    { nombre: "Interior", url: "https://www.gob.pe/mininter", imagen: "imagenes/mininter.png" },
    { nombre: "Justicia y Derechos Humanos", url: "https://www.gob.pe/minjus", imagen: "imagenes/minjusdh.png" },
    { nombre: "Mujer y Poblaciones Vulnerables", url: "https://www.gob.pe/mimp", imagen: "imagenes/mimp.png" },
    { nombre: "Producción", url: "https://www.gob.pe/produce", imagen: "imagenes/produce.png" },
    { nombre: "Relaciones Exteriores", url: "https://www.gob.pe/rree", imagen: "imagenes/cancilleria.png" },
    { nombre: "Salud", url: "https://www.gob.pe/minsa/", imagen: "imagenes/minsa.jpg" },
    { nombre: "Trabajo y Promoción del Empleo", url: "https://www.gob.pe/mtpe", imagen: "imagenes/mtpe.png" },
    { nombre: "Transportes y Comunicaciones", url: "https://www.gob.pe/mtc", imagen: "imagenes/mtc.jpg" },
    { nombre: "Vivienda, Construcción y Saneamiento", url: "https://www.gob.pe/vivienda", imagen: "imagenes/vivienda.jpg" },
    { nombre: "Cultura", url: "https://www.gob.pe/cultura", imagen: "imagenes/cultura.png" },
    { nombre: "Desarrollo e Inclusión Social", url: "https://www.gob.pe/midis", imagen: "imagenes/midis.png" }
];

document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.cards')) {
        cargarMinisterios();
    }
    
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const contenido = document.getElementById('contenido');
    sidebar.classList.toggle('collapsed');
    
    const isCollapsed = sidebar.classList.contains('collapsed');
    localStorage.setItem('sidebarCollapsed', isCollapsed);
}

function cargarMinisterios() {
    const cardsContainer = document.querySelector('.cards');
    if (!cardsContainer) return;
    
    cardsContainer.innerHTML = '';
    
    ministerios.forEach(ministerio => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${ministerio.imagen}" alt="${ministerio.nombre}">
            <h3>${ministerio.nombre}</h3>
        `;
        card.addEventListener('click', () => {
            window.open(ministerio.url, '_blank');
        });
        cardsContainer.appendChild(card);
    });
}

function mostrarInfo() {
    const modal = document.getElementById('modal');
    const modalTitulo = document.getElementById('modal-titulo');
    const modalContenido = document.getElementById('modal-contenido');
    
    modalTitulo.textContent = 'Acerca de este sitio';
    modalContenido.innerHTML = `
        <p>Este sitio web muestra información sobre los 18 ministerios del Perú.</p>
        <p><strong>Funcionalidades:</strong></p>
        <ul>
            <li>Menú lateral colapsable</li>
            <li>Información detallada de cada ministerio</li>
            <li>Diseño responsivo</li>
            <li>Acceso rápido a los sitios oficiales</li>
        </ul>
        <p><strong>Total de ministerios:</strong> ${ministerios.length}</p>
    `;
    
    modal.style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

window.addEventListener('load', function() {
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (sidebarCollapsed) {
        document.getElementById('sidebar').classList.add('collapsed');
    }
});

function buscarMinisterio() {
    console.log("Función buscarMinisterio() ejecutada"); // Para depuración
    
    const termino = document.getElementById('busqueda').value.toLowerCase();
    console.log("Término de búsqueda:", termino); // Para depuración
    
    const resultadosContainer = document.getElementById('resultados-busqueda');
    if (!resultadosContainer) {
        console.error("No se encontró el contenedor de resultados"); // Para depuración
        return;
    }
    
    if (!termino) {
        resultadosContainer.innerHTML = '<p>Por favor ingrese un término de búsqueda.</p>';
        return;
    }
    
    console.log("Ministerios disponibles:", ministerios); // Para depuración
    
    const resultados = ministerios.filter(ministerio => {
        const nombreMinistro = ministerio.nombre.toLowerCase();
        const coincide = nombreMinistro.includes(termino);
        console.log(`Comparando: "${nombreMinistro}" con "${termino}" -> ${coincide}`); // Para depuración
        return coincide;
    });
    
    console.log("Resultados encontrados:", resultados); // Para depuración
    
    resultadosContainer.innerHTML = '';
    
    if (resultados.length === 0) {
        resultadosContainer.innerHTML = '<p>No se encontraron ministerios que coincidan con tu búsqueda.</p>';
        return;
    }
    
    resultados.forEach(ministerio => {
        const elemento = document.createElement('div');
        elemento.className = 'resultado-item';
        elemento.innerHTML = `
            <img src="${ministerio.imagen}" alt="${ministerio.nombre}">
            <div>
                <h3>${ministerio.nombre}</h3>
                <button onclick="window.open('${ministerio.url}', '_blank')">Visitar Sitio</button>
            </div>
        `;
        resultadosContainer.appendChild(elemento);
    });
}
