/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    initWelcomeMessage();
    initDateDisplay();
});

function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                }
            });
        });
    }
}

function initDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const dateString = today.toLocaleDateString('es-PE', options);
    
    const dateElement = document.createElement('div');
    dateElement.className = 'current-date';
    dateElement.textContent = `Fecha actual: ${dateString}`;
    dateElement.style.textAlign = 'center';
    dateElement.style.margin = '1rem 0';
    dateElement.style.color = '#666';
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(dateElement, container.firstChild);
    }
}