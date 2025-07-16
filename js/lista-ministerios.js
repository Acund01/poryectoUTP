// ========================
// Descripciones por ministerio
// ========================
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

// ========================
// Inicialización al cargar el DOM
// ========================
document.addEventListener('DOMContentLoaded', () => {
  cargarListaMinisterios();
});

// ========================
// Carga completa de ministerios
// ========================
function cargarListaMinisterios() {
  const listaContainer = document.getElementById('lista-ministerios');
  if (!listaContainer) return;

  listaContainer.innerHTML = '';

  const ministeriosOrdenados = [...ministerios].sort((a, b) => a.nombre.localeCompare(b.nombre));
  renderizarMinisterios(ministeriosOrdenados);

  actualizarEstadisticas();
}

// ========================
// Filtrado por letra inicial
// ========================
function filtrarPorLetra() {
  const letra = document.getElementById('filtro-letra').value;
  const listaContainer = document.getElementById('lista-ministerios');
  if (!listaContainer) return;

  if (letra === 'todas') {
    cargarListaMinisterios();
    return;
  }

  const filtrados = ministerios.filter(min => min.nombre.startsWith(letra));
  listaContainer.innerHTML = '';

  if (filtrados.length === 0) {
    listaContainer.innerHTML = '<p>No hay ministerios que comiencen con la letra seleccionada.</p>';
  } else {
    renderizarMinisterios(filtrados);
  }
}

// ========================
// Ordenamiento por criterio
// ========================
function ordenarMinisterios() {
  const criterio = document.getElementById('orden').value;
  const listaContainer = document.getElementById('lista-ministerios');
  if (!listaContainer) return;

  let ordenados = [...ministerios];

  if (criterio === 'nombre-asc') {
    ordenados.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (criterio === 'nombre-desc') {
    ordenados.sort((a, b) => b.nombre.localeCompare(a.nombre));
  }

  listaContainer.innerHTML = '';
  renderizarMinisterios(ordenados);
}

// ========================
// Renderiza ministerios en el DOM
// ========================
function renderizarMinisterios(lista) {
  const container = document.getElementById('lista-ministerios');
  if (!container) return;

  lista.forEach(ministerio => {
    const item = document.createElement('div');
    item.className = 'ministerio-item';
    item.innerHTML = `
      <img src="${ministerio.imagen}" alt="${ministerio.nombre}" class="ministerio-img">
      <div class="ministerio-info">
        <h3 class="ministerio-nombre">${ministerio.nombre}</h3>
        <p class="ministerio-desc">${descripcionesMinisterios[ministerio.nombre] || 'Ministerio del Gobierno del Perú'}</p>
      </div>
      <button class="ministerio-btn" onclick="window.open('${ministerio.url}', '_blank')">Visitar Sitio</button>
    `;
    container.appendChild(item);
  });
}

// ========================
// Estadísticas de los ministerios
// ========================
function actualizarEstadisticas() {
  const total = ministerios.length;
  document.getElementById('total-ministerios').textContent = total;

  // Calcular la letra más común
  const conteoLetras = {};
  ministerios.forEach(({ nombre }) => {
    const letra = nombre.charAt(0);
    conteoLetras[letra] = (conteoLetras[letra] || 0) + 1;
  });

  let letraMasComun = '', max = 0;
  for (const letra in conteoLetras) {
    if (conteoLetras[letra] > max) {
      max = conteoLetras[letra];
      letraMasComun = letra;
    }
  }

  document.getElementById('letra-mas-comun').textContent = letraMasComun;

  // Calcular nombre más largo
  let nombreLargo = '';
  ministerios.forEach(({ nombre }) => {
    if (nombre.length > nombreLargo.length) nombreLargo = nombre;
  });

  document.getElementById('nombre-mas-largo').textContent = `${nombreLargo.length} caracteres`;
}
