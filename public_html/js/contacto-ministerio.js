// ============================
// Cargar opciones del <select> con ministerios ordenados
// ============================
function cargarMinisteriosSelect() {
    const select = document.getElementById('ministerio');
    if (!select || !Array.isArray(ministerios)) return;

    const ministeriosOrdenados = [...ministerios].sort((a, b) => 
        a.nombre.localeCompare(b.nombre)
    );

    ministeriosOrdenados.forEach(ministerio => {
        const option = document.createElement('option');
        option.value = ministerio.nombre;
        option.textContent = ministerio.nombre;
        select.appendChild(option);
    });
}

// ============================
// Enviar formulario con validación y mensaje de confirmación
// ============================
function enviarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const ministerio = document.getElementById('ministerio')?.value;
    const asunto = document.getElementById('asunto')?.value.trim();
    const mensaje = document.getElementById('mensaje')?.value.trim();

    if (!nombre || !email || !ministerio || !asunto || !mensaje) {
        alert('Por favor complete todos los campos del formulario.');
        return;
    }

    const confirmacionTexto = document.getElementById('confirmacion-texto');
    if (confirmacionTexto) {
        confirmacionTexto.innerHTML = `
            Gracias <strong>${nombre}</strong>, tu mensaje ha sido enviado al <strong>${ministerio}</strong>.<br><br>
            <strong>Asunto:</strong> ${asunto}<br>
            <strong>Mensaje:</strong> ${mensaje}<br><br>
            Recibirás una respuesta a tu correo: <strong>${email}</strong> en un plazo máximo de 48 horas.
        `;
    }

    const confirmacion = document.getElementById('confirmacion');
    if (confirmacion) {
        confirmacion.style.display = 'block';
    }

    document.getElementById('formulario-contacto')?.reset();
}

// ============================
// Ocultar mensaje de confirmación
// ============================
function cerrarConfirmacion() {
    const confirmacion = document.getElementById('confirmacion');
    if (confirmacion) {
        confirmacion.style.display = 'none';
    }
}

// ============================
// Inicialización
// ============================
function inicializarFormulario() {
    cargarMinisteriosSelect();

    const form = document.getElementById('formulario-contacto');
    if (form) {
        form.addEventListener('submit', enviarFormulario);
    }

    const btnCerrar = document.getElementById('btnCerrarConfirmacion');
    if (btnCerrar) {
        btnCerrar.addEventListener('click', cerrarConfirmacion);
    }
}

document.addEventListener('DOMContentLoaded', inicializarFormulario);
