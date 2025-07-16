document.addEventListener("DOMContentLoaded", () => {
  initFormularioDenuncia();
  initMenuToggle();
});

// =========================================
// Inicializa el formulario de denuncia
// =========================================
function initFormularioDenuncia() {
  const form = document.getElementById("registroDenuncia");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("¡La denuncia ha sido registrada con éxito!");

    form.reset();
  });
}

// =========================================
// Configura el botón del menú hamburguesa
// =========================================
function initMenuToggle() {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("menu-nav");

  if (!menuToggle || !nav) return;

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("visible");
  });
}
