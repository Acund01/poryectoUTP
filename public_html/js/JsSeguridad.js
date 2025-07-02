
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registroDenuncia");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("¡La denuncia ha sido registrada con éxito!");

    form.reset(); 
  });


  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("menu-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("visible");
    });
  }
});
