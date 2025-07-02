
document.getElementById('btnUbicar').addEventListener('click', function () {
  alert('Será redirigido a la plataforma oficial para ubicar la comisaría más cercana.');
  window.open("https://aplicaciones.mininter.gob.pe/ubicatucomisaria/", "_blank");
});

const secciones = document.querySelectorAll('.animado');

const mostrarSeccion = () => {
  const trigger = window.innerHeight * 0.85;

  secciones.forEach(seccion => {
    const seccionTop = seccion.getBoundingClientRect().top;
    if (seccionTop < trigger) {
      seccion.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', mostrarSeccion);
window.addEventListener('load', mostrarSeccion);


//carrusel
const items = document.querySelectorAll('.carrusel-item');
let index = 0;

function mostrarItem(n) {
  items.forEach((item, i) => {
    item.classList.remove('activo');
    if (i === n) item.classList.add('activo');
  });
}

document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  mostrarItem(index);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % items.length;
  mostrarItem(index);
});

// Auto-avance cada 7 segundos
setInterval(() => {
  index = (index + 1) % items.length;
  mostrarItem(index);
}, 7000);
