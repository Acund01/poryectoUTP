document.addEventListener('DOMContentLoaded', () => {
    // ============================
    // Datos simulados
    // ============================
    const tramitesPopulares = [
        { nombre: "Renovación de Pasaporte", url: "#" },
        { nombre: "Prórroga de Estancia", url: "#" },
        { nombre: "Carné de Extranjería", url: "#" },
        { nombre: "Legalización de Documentos", url: "#" }
    ];

    const noticiasRecientes = [
        { titulo: "Nuevos horarios de atención", fecha: "15/06/2025", resumen: "A partir del 1 de julio cambian los horarios en todas las oficinas." },
        { titulo: "Proceso simplificado para visas", fecha: "10/06/2025", resumen: "Se implementa nuevo sistema para agilizar trámites de visa." },
        { titulo: "Cierre temporal por mantenimiento", fecha: "05/06/2025", resumen: "Las oficinas de Lima Centro cerrarán del 20 al 22 de junio." }
    ];

    // ============================
    // UI: Trámites populares
    // ============================
    function cargarTramitesPopulares() {
        const listaTramites = document.getElementById('tramitesLista');
        if (!listaTramites) return;

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

    // ============================
    // UI: Noticias recientes
    // ============================
    function cargarNoticiasRecientes() {
        const noticiasContainer = document.getElementById('noticiasContainer');
        if (!noticiasContainer) return;

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

            div.append(h4, span, p);
            noticiasContainer.appendChild(div);
        });
    }

    // ============================
    // UI: Menú responsive (hamburguesa)
    // ============================
    function setupMenuResponsive() {
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu ul');

        if (!menuToggle || !menu) return;

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    }

    // ============================
    // Modal: Calculadora de Multas
    // ============================
    function setupCalculadoraMultas() {
        const modal = document.getElementById('calculadoraModal');
        const btn = document.getElementById('calculadoraBtn');
        const span = document.querySelector('.close');
        const form = document.getElementById('calculadoraForm');

        if (!modal || !btn || !span || !form) return;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'block';
        });

        span.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            calcularMulta();
        });
    }

    function calcularMulta() {
        const tipoInfraccionSelect = document.getElementById('tipoInfraccion');
        const diasRetrasoInput = document.getElementById('diasRetraso');
        const resultadoDiv = document.getElementById('resultadoCalculadora');

        if (!tipoInfraccionSelect || !diasRetrasoInput || !resultadoDiv) return;

        const tipoInfraccion = tipoInfraccionSelect.value;
        const diasRetraso = parseInt(diasRetrasoInput.value);
        let multa = 0;

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
                multa = diasRetraso * 20 + 100;
                break;
            default:
                multa = 0;
        }

        resultadoDiv.innerHTML = `
            <h3>Resultado del cálculo:</h3>
            <p><strong>Tipo de infracción:</strong> ${tipoInfraccionSelect.options[tipoInfraccionSelect.selectedIndex].text}</p>
            <p><strong>Días de retraso:</strong> ${diasRetraso}</p>
            <p><strong>Multa calculada:</strong> S/ ${multa.toFixed(2)}</p>
            <p>Este cálculo es referencial. Para información exacta, consulte en nuestras oficinas.</p>
        `;
        resultadoDiv.style.display = 'block';
    }

    // ============================
    // Botón: Redirección a formulario
    // ============================
    function setupFormularioBtn() {
        const formularioBtn = document.getElementById('formularioBtn');
        if (!formularioBtn) return;

        formularioBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const confirmar = confirm('¿Deseas ir al formulario de contacto?');
            if (confirmar) {
                window.location.href = 'formulario-migraciones.html';
            }
        });
    }

    // ============================
    // Inicializador principal
    // ============================
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
