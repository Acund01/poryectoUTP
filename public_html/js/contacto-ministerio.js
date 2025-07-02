/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function cargarMinisteriosSelect() {
    const select = document.getElementById('ministerio');
    
    const ministeriosOrdenados = [...ministerios].sort((a, b) => a.nombre.localeCompare(b.nombre));
    
    ministeriosOrdenados.forEach(ministerio => {
        const option = document.createElement('option');
        option.value = ministerio.nombre;
        option.textContent = ministerio.nombre;
        select.appendChild(option);
    });
}

function enviarFormulario(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const ministerio = document.getElementById('ministerio').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (!nombre || !email || !ministerio || !asunto || !mensaje) {
        alert('Por favor complete todos los campos del formulario.');
        return;
    }
    
    const confirmacionTexto = document.getElementById('confirmacion-texto');
    confirmacionTexto.innerHTML = `
        Gracias <strong>${nombre}</strong>, tu mensaje ha sido enviado al <strong>${ministerio}</strong>.<br><br>
        <strong>Asunto:</strong> ${asunto}<br>
        <strong>Mensaje:</strong> ${mensaje}<br><br>
        Recibirás una respuesta a tu correo: <strong>${email}</strong> en un plazo máximo de 48 horas.
    `;
    
    document.getElementById('confirmacion').style.display = 'block';
    
    document.getElementById('formulario-contacto').reset();
}

function cerrarConfirmacion() {
    document.getElementById('confirmacion').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', cargarMinisteriosSelect);

