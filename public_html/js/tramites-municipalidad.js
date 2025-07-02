/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.addEventListener('DOMContentLoaded', function() {
    initTramites();
    initNoticias();
});

function initTramites() {
    const tramiteSelect = document.getElementById('tramite');
    const tipoSelect = document.getElementById('tipo');
    const calcularBtn = document.getElementById('calcularBtn');
    const resultadoDiv = document.getElementById('resultadoTramite');
    const tramitesContainer = document.getElementById('tramitesContainer');

    if (!tramiteSelect || !tramitesContainer) return;

    const tramitesData = {
        licencia: {
            name: 'Licencia de Construcción',
            tipos: [
                { name: 'Nueva construcción', costo: 1500 },
                { name: 'Ampliación', costo: 1000 },
                { name: 'Remodelación', costo: 800 }
            ],
            desc: 'Permiso necesario para realizar construcciones nuevas, ampliaciones o remodelaciones en propiedades.'
        },
        permiso: {
            name: 'Permiso de Comercio',
            tipos: [
                { name: 'Establecimiento nuevo', costo: 500 },
                { name: 'Renovación', costo: 300 },
                { name: 'Cambio de giro', costo: 400 }
            ],
            desc: 'Autorización para operar un negocio o establecimiento comercial en la ciudad.'
        },
        pago: {
            name: 'Pago de Arbitrios',
            tipos: [
                { name: 'Predial', costo: 'Según avalúo' },
                { name: 'Limpieza pública', costo: 120 },
                { name: 'Parques y jardines', costo: 80 }
            ],
            desc: 'Pagos obligatorios por servicios municipales como limpieza pública y mantenimiento de áreas verdes.'
        },
        otros: {
            name: 'Otros Trámites',
            tipos: [
                { name: 'Certificado de posesión', costo: 50 },
                { name: 'Copias certificadas', costo: 20 },
                { name: 'Informes técnicos', costo: 200 }
            ],
            desc: 'Diversos trámites y certificaciones que emite la municipalidad.'
        }
    };

    function cargarTramites() {
        tramitesContainer.innerHTML = '';
        
        for (const key in tramitesData) {
            const tramite = tramitesData[key];
            const tramiteItem = document.createElement('div');
            tramiteItem.className = 'tramite-item';
            tramiteItem.innerHTML = `
                <h3 class="tramite-title">${tramite.name}</h3>
                <p class="tramite-desc">${tramite.desc}</p>
            `;
            tramitesContainer.appendChild(tramiteItem);
        }
    }

    tramiteSelect.addEventListener('change', function() {
        const selectedTramite = this.value;
        
        tipoSelect.innerHTML = '<option value="">-- Seleccione un tipo --</option>';
        tipoSelect.disabled = !selectedTramite;
        
        if (selectedTramite) {
            tramitesData[selectedTramite].tipos.forEach(tipo => {
                const option = document.createElement('option');
                option.value = tipo.name.toLowerCase().replace(/\s+/g, '-');
                option.textContent = tipo.name;
                tipoSelect.appendChild(option);
            });
        }
    });

    if (calcularBtn && resultadoDiv) {
        calcularBtn.addEventListener('click', function() {
            const tramite = tramiteSelect.value;
            const tipo = tipoSelect.value;
            
            if (!tramite || !tipo) {
                resultadoDiv.textContent = 'Por favor seleccione un trámite y su tipo.';
                resultadoDiv.style.color = 'red';
                return;
            }
            
            const tramiteInfo = tramitesData[tramite];
            const tipoInfo = tramiteInfo.tipos.find(t => t.name.toLowerCase().replace(/\s+/g, '-') === tipo);
            
            if (tipoInfo) {
                resultadoDiv.innerHTML = `
                    <h3>Resultado del cálculo</h3>
                    <p><strong>Trámite:</strong> ${tramiteInfo.name}</p>
                    <p><strong>Tipo:</strong> ${tipoInfo.name}</p>
                    <p><strong>Costo aproximado:</strong> ${typeof tipoInfo.costo === 'number' ? `S/ ${tipoInfo.costo.toFixed(2)}` : tipoInfo.costo}</p>
                    <p>Para información exacta, visite nuestras oficinas.</p>
                `;
                resultadoDiv.style.color = 'var(--secondary-color)';
            } else {
                resultadoDiv.textContent = 'No se pudo calcular el costo. Por favor intente nuevamente.';
                resultadoDiv.style.color = 'red';
            }
        });
    }

    cargarTramites();
}

function initNoticias() {
    const noticiasContainer = document.getElementById('noticiasContainer');
    if (!noticiasContainer) return;

    // Datos de noticias (en un caso real, esto vendría de una API)
    const noticias = [
        {
            titulo: 'Municipalidad inaugura nuevo parque en Cerro Colorado',
            fecha: '2025-06-15',
            imagen: 'imagenes/noticia1.jpg',
            descripcion: 'El alcalde inauguró el nuevo parque ecológico con áreas verdes y juegos infantiles para la comunidad.'
        },
        {
            titulo: 'Programa de reciclaje obtiene reconocimiento nacional',
            fecha: '2025-06-10',
            imagen: 'imagenes/noticia2.jpg',
            descripcion: 'Nuestro programa de reciclaje municipal fue galardonado como el mejor del país en sostenibilidad ambiental.'
        },
        {
            titulo: 'Festival gastronómico atrae a miles de visitantes',
            fecha: '2025-06-05',
            imagen: 'imagenes/noticia3.jpg',
            descripcion: 'El festival "Sabores de Arequipa" superó expectativas con más de 20,000 visitantes en su primera semana.'
        },
        {
            titulo: 'Nuevo sistema de transporte urbano en implementación',
            fecha: '2025-05-28',
            imagen: 'imagenes/noticia4.png',
            descripcion: 'La municipalidad anuncia la implementación progresiva del nuevo sistema de buses eléctricos para la ciudad.'
        }
    ];

    function mostrarNoticias() {
        noticiasContainer.innerHTML = '';
        
        noticias.forEach(noticia => {
            const noticiaCard = document.createElement('div');
            noticiaCard.className = 'noticia-card';
            
            const fechaFormateada = new Date(noticia.fecha).toLocaleDateString('es-PE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            noticiaCard.innerHTML = `
                <img src="${noticia.imagen}" alt="${noticia.titulo}" class="noticia-img">
                <div class="noticia-content">
                    <h3 class="noticia-title">${noticia.titulo}</h3>
                    <p class="noticia-date">${fechaFormateada}</p>
                    <p class="noticia-desc">${noticia.descripcion}</p>
                </div>
            `;
            
            noticiasContainer.appendChild(noticiaCard);
        });
    }

    mostrarNoticias();

    setInterval(() => {
        console.log('Actualizando noticias...');
    }, 30000);
}

