/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.addEventListener('DOMContentLoaded', function() {
    // Array de países
    const paises = [
        "Perú", "Argentina", "Bolivia", "Brasil", "Chile", 
        "Colombia", "Ecuador", "Paraguay", "Uruguay", "Venezuela",
        "Estados Unidos", "Canadá", "México", "España", "Francia"
    ];

    function cargarPaises() {
        const selectPais = document.getElementById('pais');
        
        if (!selectPais) {
            console.error("No se encontró el elemento con ID 'pais'");
            return;
        }

        selectPais.innerHTML = '<option value="">Seleccione un país</option>';
        
        paises.forEach(pais => {
            const option = document.createElement('option');
            option.value = pais.toLowerCase().replace(/\s/g, '-');
            option.textContent = pais;
            selectPais.appendChild(option);
        });
    }

    function validarDNI(dni) {
        return /^\d{8}$/.test(dni);
    }

    function validarFormulario() {
        let valido = true;
        const campos = [
            //trim elimina espacios en blancos, para no validarlo en el formulario
            { id: 'nombre', condicion: (v) => v.trim().length >= 3, mensaje: 'El nombre debe tener al menos 3 caracteres.' },
            { id: 'dni', condicion: (v) => validarDNI(v.trim()), mensaje: 'Ingrese un DNI válido (8 dígitos).' },
            { id: 'correo', condicion: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), mensaje: 'Ingrese un correo electrónico válido.' },
            { id: 'pais', condicion: (v) => v !== '', mensaje: 'Seleccione un país.' },
            { id: 'mensaje', condicion: (v) => v.trim().length >= 10, mensaje: 'El mensaje debe tener al menos 10 caracteres.' },
            { id: 'terminos', condicion: (v) => v, mensaje: 'Debe aceptar los términos y condiciones.' }
        ];

        campos.forEach(({id, condicion, mensaje}) => {
            const elemento = document.getElementById(id);
            const errorElement = document.getElementById(`${id}Error`);
            
            if (!elemento || !errorElement) return;
            
            errorElement.textContent = '';
            
            if (!condicion(elemento.value)) {
                errorElement.textContent = mensaje;
                valido = false;
            }
        });

        return valido;
    }

    function mostrarConfirmacion() {
        const confirmacionDiv = document.getElementById('confirmacionEnvio');
        if (!confirmacionDiv) return;
        
        confirmacionDiv.innerHTML = `
            <i class="fas fa-check-circle" style="font-size: 3rem; color: #4CAF50; margin-bottom: 1rem;"></i>
            <h3>¡Formulario enviado con éxito!</h3>
            <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo en un plazo máximo de 48 horas.</p>
            <p>Número de seguimiento: #${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</p>
        `;
        confirmacionDiv.style.display = 'block';
        confirmacionDiv.scrollIntoView({ behavior: 'smooth' });
    }

    function setupFormulario() {
        const formulario = document.getElementById('formularioMigraciones');
        if (!formulario) return;
        
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validarFormulario()) {
                setTimeout(() => {
                    mostrarConfirmacion();
                    formulario.reset();
                }, 1000);
            }
        });
        
        const dniInput = document.getElementById('dni');
        if (dniInput) {
            dniInput.addEventListener('input', function() {
                if (this.value.length > 8) {
                    this.value = this.value.slice(0, 8);
                }
            });
        }
    }

    // Inicialización
    cargarPaises();
    setupFormulario();
});

