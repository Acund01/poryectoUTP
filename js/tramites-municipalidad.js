/*
 * Archivo: tramites-noticias.js
 * Funciones: Gestión de trámites y noticias municipales
 */

document.addEventListener('DOMContentLoaded', () => {
  initTramites();
  initNoticias();
});

//
// ========== MÓDULO: Trámites =========
//
function initTramites() {
  const tramiteSelect = document.getElementById('tramite');
  const tipoSelect = document.getElementById('tipo');
  const calcularBtn = document.getElementById('calcularBtn');
  const resultadoDiv = document.getElementById('resultadoTramite');
  const tramitesContainer = document.getElementById('tramitesContainer');

  if (!tramiteSelect || !tramitesContainer) return;

  // Base de datos de trámites
  const tramitesData = {
    licencia: {
      name: 'Licencia de Construcción',
      desc: 'Permiso necesario para realizar construcciones nuevas, ampliaciones o remodelaciones en propiedades.',
      tipos: [
        { name: 'Nueva construcción', costo: 1500 },
        { name: 'Ampliación', costo: 1000 },
        { name: 'Remodelación', costo: 800 }
      ]
    },
    permiso: {
      name: 'Permiso de Comercio',
      desc: 'Autorización para operar un negocio o establecimiento comercial en la ciudad.',
      tipos: [
        { name: 'Establecimiento nuevo', costo: 500 },
        { name: 'Renovación', costo: 300 },
        { name: 'Cambio de giro', costo: 400 }
      ]
    },
    pago: {
      name: 'Pago de Arbitrios',
      desc: 'Pagos obligatorios por servicios municipales como limpieza pública y mantenimiento de áreas verdes.',
      tipos: [
        { name: 'Predial', costo: 'Según avalúo' },
        { name: 'Limpieza pública', costo: 120 },
        { name: 'Parques y jardines', costo: 80 }
      ]
    },
    otros: {
      name: 'Otros Trámites',
      desc: 'Diversos trámites y certificaciones que emite la municipalidad.',
      tipos: [
        { name: 'Certificado de posesión', costo: 50 },
        { name: 'Copias certificadas', costo: 20 },
        { name: 'Informes técnicos', costo: 200 }
      ]
    }
  };

  // Renderiza la lista general de trámites
  function cargarTramites() {
    tramitesContainer.innerHTML = '';
    Object.values(tramitesData).forEach(({ name, desc }) => {
      const div = document.createElement('div');
      div.className = 'tramite-item';
      div.innerHTML = `
        <h3 class="tramite-title">${name}</h3>
        <p class="tramite-desc">${desc}</p>
      `;
      tramitesContainer.appendChild(div);
    });
  }

  // Maneja selección de tipo según trámite
  tramiteSelect.addEventListener('change', function () {
    const selectedTramite = this.value;
    tipoSelect.innerHTML = '<option value="">-- Seleccione un tipo --</option>';
    tipoSelect.disabled = !selectedTramite;

    if (selectedTramite) {
      tramitesData[selectedTramite].tipos.forEach(({ name }) => {
        const option = document.createElement('option');
        option.value = name.toLowerCase().replace(/\s+/g, '-');
        option.textContent = name;
