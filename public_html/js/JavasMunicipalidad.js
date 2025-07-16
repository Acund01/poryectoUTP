// ===============================
// Inicialización al cargar el DOM
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initWelcomeMessage();  // Esta función se define más abajo
    initDateDisplay();
});

// ===============================
// Menú hamburguesa (responsive)
// ===============================
function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (!menuToggle || !mainNav) return;

    // Alternar visibilidad del menú
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace (modo móvil)
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
            }
        });
    });
}

// ===============================
// Mostrar fecha actual en español
// ===============================
function initDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const dateString = today.toLocaleDateString('es-PE', options);

    const dateElement = document.createElement('div');
    dateElement.className = 'current-date';
    dateElement.textContent = `Fecha actual: ${dateString}`;
    
    // Estilos opcionales si no están definidos en CSS
    Object.assign(dateElement.style, {
        textAlign: 'center',
        margin: '1rem 0',
        color: '#666'
    });

    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(dateElement, container.firstChild);
    }
}

// ===============================
// Mensaje de bienvenida (opcional)
// ===============================
function initWelcomeMessage() {
    // Puedes personalizar o eliminar esta función según el diseño
    console.log("¡Bienvenido al sitio!");
}
