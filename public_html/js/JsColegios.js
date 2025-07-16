document.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  renderColegios();
});

// ==============================
// Función para alternar el menú lateral
// ==============================
function initMenuToggle() {
  const menuToggle = document.getElementById('menu-toggle');
  const sideNav = document.getElementById('side-nav');

  if (menuToggle && sideNav) {
    menuToggle.addEventListener('click', () => {
      sideNav.classList.toggle('show');
    });
  }
}

// ==============================
// Datos de los colegios profesionales
// ==============================
const colegios = [
  { nombre: "Abogados", img: "logos-colegios/abogados-200x80.jpg", url: "https://www.judecap.org.pe/" },
  { nombre: "Administración", img: "logos-colegios/administracion2-200x80.jpg", url: "https://www.cladperu.org/" },
  { nombre: "Antropólogos", img: "logos-colegios/antropologos-200x80.jpg", url: "https://www.cpap.net.pe/" },
  { nombre: "Arqueólogos", img: "logos-colegios/arqueologos-1-200x80.jpg", url: "https://coarpe.org.pe/" },
  { nombre: "Arquitectos", img: "logos-colegios/arquitectos-200x80.jpg", url: "http://www.cap.org.pe/" },
  { nombre: "Físicos", img: "logos-colegios/banner-FISICOS-200x80.jpg", url: "https://cfp.org.pe/" },
  { nombre: "Bibliotecólogos", img: "logos-colegios/bibliotecologos-200x80.jpg", url: "https://bibliotecologos.pe/" },
  { nombre: "Biólogos", img: "logos-colegios/biologos-200x80.jpg", url: "https://www.cbperu.org.pe/" },
  { nombre: "Contadores", img: "logos-colegios/contadores-200x80.jpg", url: "https://www.jdccpp.org.pe/" },
  { nombre: "Cooperativismo", img: "logos-colegios/cooperativismo-200x80.jpg", url: "#" },
  { nombre: "CRRIIP", img: "logos-colegios/crriip-200x80.jpg", url: "https://crriirrhhp.org.pe/" },
  { nombre: "Economistas", img: "logos-colegios/economistas_8590-200x80.jpg", url: "https://colegiodeeconomistasdelperu.org/" },
  { nombre: "Enfermeros", img: "logos-colegios/enfermeros-200x80.jpg", url: "https://www.cep.org.pe/" },
  { nombre: "Estadísticos", img: "logos-colegios/estadisticos-200x80.jpg", url: "https://www.coespe.org.pe/" },
  { nombre: "Geógrafos", img: "logos-colegios/geografos-200x80.jpg", url: "https://cgp.org.pe/web/" },
  { nombre: "Ingenieros", img: "logos-colegios/ingenieros-200x80.jpg", url: "https://www.cip.org.pe/" },
  { nombre: "Marina Mercante", img: "logos-colegios/marina-mercante-1-200x80.jpg", url: "https://commpe.org/" },
  { nombre: "Matemáticos", img: "logos-colegios/matematicos-200x80.jpg", url: "https://cmp.comaperu.org/" },
  { nombre: "Médicos", img: "logos-colegios/medico-200x80.jpg", url: "https://www.cmp.org.pe/" },
  { nombre: "Notarios", img: "logos-colegios/notarios-200x80.jpg", url: "https://www.juntadedecanos.org.pe/" },
  { nombre: "Nutricionistas", img: "logos-colegios/nutricionistas-200x80.jpg", url: "https://cnp.org.pe/" },
  { nombre: "Obstetras", img: "logos-colegios/obstetras-200x80.jpg", url: "https://colegiodeobstetras.pe/" },
  { nombre: "Odontólogos", img: "logos-colegios/odontologos-200x80.jpg", url: "https://www.cop.org.pe/" },
  { nombre: "Periodistas", img: "logos-colegios/periodistas-200x80.jpg", url: "https://cpp.pe/" },
  { nombre: "Profesores", img: "logos-colegios/profesores-200x80.jpg", url: "https://cppe.org.pe/portal/" },
  { nombre: "Psicólogos", img: "logos-colegios/psicologos-400x250-200x80.jpg", url: "https://www.cpsp.pe/" },
  { nombre: "Químicos", img: "logos-colegios/quimico-200x80.jpg", url: "https://cqpperu.org/" },
  { nombre: "Químico Farmacéutico", img: "logos-colegios/quimico-farmaceutico-200x80.jpg", url: "https://cqfp.pe/" },
  { nombre: "Relacionistas Públicos", img: "logos-colegios/relacionistas-publicos-peru-200x80.jpg", url: "https://www.colegioprpperu.org/" },
  { nombre: "Sociólogos", img: "logos-colegios/sociologos-200x80.jpg", url: "https://colegiodesociologosperu.org.pe/" },
  { nombre: "Tecnólogos Médicos", img: "logos-colegios/tecnologo-medico-200x80.jpg", url: "https://ctmperu.org.pe/" },
  { nombre: "Trabajadores Sociales", img: "logos-colegios/trabajadores-sociales-e1677124457207.jpg", url: "https://ctsp.org.pe/" },
  { nombre: "Traductores", img: "logos-colegios/traductores-200x80.jpg", url: "https://www.colegiodetraductores.org.pe/" },
  { nombre: "Turismo", img: "logos-colegios/turismo02-200x80.jpg", url: "https://colituraqp.com/" },
  { nombre: "Médicos Veterinarios", img: "logos-colegios/medico-veterinario-200x80.jpg", url: "https://www.cmvp.org.pe/" },
];

// ==============================
// Renderizar tarjetas de colegios
// ==============================
function renderColegios() {
  const container = document.getElementById('card-colegios');
  if (!container) return;

  colegios.forEach(({ nombre, img, url }) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const logo = document.createElement('img');
    logo.src = img;
    logo.alt = nombre;

    const title = document.createElement('span');
    title.textContent = nombre;

    const button = document.createElement('button');
    button.textContent = 'Visitar';
    button.addEventListener('click', () => {
      window.open(url, '_blank');
    });

    card.appendChild(logo);
    card.appendChild(title);
    card.appendChild(button);
    container.appendChild(card);
  });
}
