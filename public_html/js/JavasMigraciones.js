/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const tramitesPopulares = [
        {nombre: "Renovación de Pasaporte", url: "#"},
        {nombre: "Prórroga de Estancia", url: "#"},
        {nombre: "Carné de Extranjería", url: "#"},
        {nombre: "Legalización de Documentos", url: "#"}
    ];

    const noticiasRecientes = [
        {titulo: "Nuevos horarios de atención", fecha: "15/06/2025", resumen: "A partir del 1 de julio cambian los horarios en todas las oficinas."},
        {titulo: "Proceso simplificado para visas", fecha: "10/06/2025", resumen: "Se implementa nuevo sistema para agilizar trámites de visa."},
        {titulo: "Cierre temporal por mantenimiento", fecha: "05/06/2025", resumen: "Las oficinas de Lima Centro cerrarán del 20 al 22 de junio."}
    ];

    // Funciones para manipular el DOM
    function cargarTramitesPopulares() {
        const listaTramites = document.getElementById('tramitesLista');

        // Verificar si el elemento existe
        if (!listaTramites)
            return;

        listaTramites.innerHTML = '';

        tramitesPopulares.forEach(tramite => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = tramite.url;
            a.textContent = tramite.nombre;
            li.appendChild(a);
            listaTramites.appendChild(li);
        });
    }

    function cargarNoticiasRecientes() {
        const noticiasContainer = document.getElementById('noticiasContainer');

        // Verificar si el elemento existe
        if (!noticiasContainer)
            return;

        noticiasContainer.innerHTML = '';

        noticiasRecientes.forEach(noticia => {
            const div = document.createElement('div');
            div.className = 'noticia';

            const h4 = document.createElement('h4');
            h4.textContent = noticia.titulo;

            const span = document.createElement('span');
            span.className = 'fecha';
            span.textContent = noticia.fecha;

            const p = document.createElement('p');
            p.textContent = noticia.resumen;

            div.appendChild(h4);
            div.appendChild(span);
            div.appendChild(p);
            noticiasContainer.appendChild(div);
        });
    }

    function setupMenuResponsive() {
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu ul');

        // Verificar si los elementos existen
        if (!menuToggle || !menu)
            return;

        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('show');
        });
    }

    function setupCalculadoraMultas() {
        const modal = document.getElementById('calculadoraModal');
        const btn = document.getElementById('calculadoraBtn');
        const span = document.querySelector('.close');
        const form = document.getElementById('calculadoraForm');

        // Verificar si los elementos existen
        if (!modal || !btn || !span || !form)
            return;

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            modal.style.display = 'block';
        });

        span.addEventListener('click', function () {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            calcularMulta();
        });
    }

    function calcularMulta() {
        const tipoInfraccionSelect = document.getElementById('tipoInfraccion');
        const diasRetrasoInput = document.getElementById('diasRetraso');
        const resultadoDiv = document.getElementById('resultadoCalculadora');

        // Verificar si los elementos existen
        if (!tipoInfraccionSelect || !diasRetrasoInput || !resultadoDiv)
            return;

        const tipoInfraccion = tipoInfraccionSelect.value;
        const diasRetraso = parseInt(diasRetrasoInput.value);
        let multa = 0;

        // Validación de campos
        if (!tipoInfraccion || isNaN(diasRetraso)) {
            alert('Por favor complete todos los campos correctamente.');
            return;
        }


        switch (tipoInfraccion) {
            case 'sobreestadia':
                multa = diasRetraso * 10;
                break;
            case 'documentacion':
                multa = diasRetraso * 15;
                break;
            case 'trabajo':
                multa = diasRetraso * 20 + 100; // Multa base + por día
                break;
            default:
                multa = 0;
        }

        // Mostrar resultado
        resultadoDiv.innerHTML = `
            <h3>Resultado del cálculo:</h3>
            <p><strong>Tipo de infracción:</strong> ${tipoInfraccionSelect.options[tipoInfraccionSelect.selectedIndex].text}</p>
            <p><strong>Días de retraso:</strong> ${diasRetraso}</p>
            <p><strong>Multa calculada:</strong> S/ ${multa.toFixed(2)}</p>
            <p>Este cálculo es referencial. Para información exacta, consulte en nuestras oficinas.</p>
        `;
        resultadoDiv.style.display = 'block';
    }

    function setupFormularioBtn() {
        const formularioBtn = document.getElementById('formularioBtn');

        // Verificar si el elemento existe
        if (!formularioBtn)
            return;

        formularioBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const confirmar = confirm('¿Deseas ir al formulario de contacto?');
            if (confirmar) {
                window.location.href = 'formulario-migraciones.html';
            }
        });
    }

    // Inicialización
    function init() {
        cargarTramitesPopulares();
        cargarNoticiasRecientes();
        setupMenuResponsive();
        setupCalculadoraMultas();
        setupFormularioBtn();

        setTimeout(() => {
            alert('Bienvenido al portal de Migraciones Perú. Aquí encontrarás información sobre trámites migratorios y servicios.');
        }, 1000);
    }

    init();
});

