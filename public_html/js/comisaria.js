// ============================
// Función: Redirigir a la plataforma de ubicación de comisarías
// ============================
function configurarBotonUbicar() {
  const btnUbicar = document.getElementById('btnUbicar');
  if (!btnUbicar) return;

  btnUbicar.addEventListener('click', () => {
    alert('Será redirigido a la plataforma oficial para ubicar la comisaría más cercana.');
    window.open("https://aplicaciones.mininter.gob.pe/ubicatucomisaria/", "_blank");
  });
}

// ============================
// Función: Mostrar secciones animadas al hacer scroll
// ============================
function configurarAnimacionesScroll() {
  const secciones = document.querySelectorAll('.animado');

  function mostrarSeccion() {
    const trigger = window.innerHeight * 0.85;

    secciones.forEach(seccion => {
      const seccionTop = seccion.getBoundingClientRect().top;
      if (seccionTop < trigger) {
        seccion.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', mostrarSeccion);
  window.addEventListener('load', mostrarSeccion);
}

// ============================
// Carrusel de elementos
// ============================
function configurarCarrusel() {
  const items = document.querySelectorAll('.carrusel-item');
  let index = 0;

  function mostrarItem(n) {
    items.forEach((item, i) => {
      item.classList.toggle('activo', i === n);
    });
  }

  const btnPrev = document.getElementById('prevBtn');
  const btnNext = document.getElementById('nextBtn');

  if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => {
      index = (index - 1 + items.length) % items.length;
      mostrarItem(index);
    });

    btnNext.addEventListener('click', () => {
      index = (index + 1) % items.length;
      mostrarItem(index);
    });
  }

  // Auto-avance cada 7 segundos
  setInterval(() => {
    index = (index + 1) % items.length;
    mostrarItem(index);
  }, 7000);
}

// ============================
// Inicialización de todo el script
// ============================
function inicializarPagina() {
  configurarBotonUbicar();
  configurarAnimacionesScroll();
  configurarCarrusel();
}

document.addEventListener('DOMContentLoaded', inicializarPagina);
