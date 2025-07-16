/*
 * Archivo JS: Carousel + Información + Galería Modal
 * Descripción: Maneja el slider, sección de info expandible y galería modal de imágenes
 */

// ========== Inicialización principal ==========
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initInfoSection();
  initModalGallery();
});

// ========== Carrusel automático de imágenes ==========
function initCarousel() {
  const carouselImages = document.querySelector('.carousel-images');
  if (!carouselImages) return;

  const totalSlides = carouselImages.querySelectorAll('img').length;
  const nextBtn = document.querySelector('.carousel .next');
  const prevBtn = document.querySelector('.carousel .prev');

  let index = 0;
  let intervalId;

  function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    showSlide(index + 1);
  }

  function startCarousel() {
    intervalId = setInterval(nextSlide, 5000);
  }

  function resetInterval() {
    clearInterval(intervalId);
    startCarousel();
  }

  nextBtn?.addEventListener('click', () => {
    showSlide(index + 1);
    resetInterval();
  });

  prevBtn?.addEventListener('click', () => {
    showSlide(index - 1);
    resetInterval();
  });

  // Pausa en hover
  carouselImages.parentElement.addEventListener('mouseenter', () => clearInterval(intervalId));
  carouselImages.parentElement.addEventListener('mouseleave', startCarousel);

  startCarousel();
}

// ========== Mostrar/ocultar información adicional ==========
function initInfoSection() {
  const infoBtn = document.getElementById('infoBtn');
  const moreInfo = document.getElementById('moreInfo');

  if (infoBtn && moreInfo) {
    infoBtn.addEventListener('click', () => {
      moreInfo.classList.toggle('hidden');
      infoBtn.textContent = moreInfo.classList.contains('hidden')
        ? 'Ver más información'
        : 'Ver menos información';
    });
  }
}

// ========== Galería de imágenes en Modal ==========
function initModalGallery() {
  const modal = document.getElementById('galleryModal');
  const openModalBtn = document.getElementById('openModalBtn');
  if (!modal || !openModalBtn) return;

  const closeModalBtn = modal.querySelector('.close-modal');
  const modalImages = document.getElementById('modalImages');
  const prevModalBtn = document.getElementById('prevModal');
  const nextModalBtn = document.getElementById('nextModal');

  const galleryImages = [
    { src: 'imagenes/catedral.jpg', alt: 'Catedral de Arequipa' },
    { src: 'imagenes/yanahuara.jpg', alt: 'Barrio de Yanahuara' },
    { src: 'imagenes/monasterio.jpg', alt: 'Monasterio de Santa Catalina' },
    { src: 'imagenes/bolognesi.jpg', alt: 'Puente Bolognesi' },
    { src: 'imagenes/colca.jpg', alt: 'Cañon del Colca' }
  ];

  let currentImageIndex = 0;

  function loadModalImages() {
    modalImages.innerHTML = '';
    galleryImages.forEach((img, index) => {
      const imgEl = document.createElement('img');
      imgEl.src = img.src;
      imgEl.alt = img.alt;
      imgEl.style.display = index === 0 ? 'block' : 'none';
      modalImages.appendChild(imgEl);
    });
  }

  function showImage(index) {
    const images = modalImages.querySelectorAll('img');
    currentImageIndex = (index + images.length) % images.length;

    images.forEach((img, i) => {
      img.style.display = i === currentImageIndex ? 'block' : 'none';
    });
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  // Eventos de navegación
  openModalBtn.addEventListener('click', () => {
    loadModalImages();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  closeModalBtn?.addEventListener('click', closeModal);

  window.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  prevModalBtn?.addEventListener('click', () => showImage(currentImageIndex - 1));
  nextModalBtn?.addEventListener('click', () => showImage(currentImageIndex + 1));

  // Navegación por teclado
  document.addEventListener('keydown', (event) => {
    if (modal.style.display === 'block') {
      switch (event.key) {
        case 'ArrowLeft':
          showImage(currentImageIndex - 1);
          break;
        case 'ArrowRight':
          showImage(currentImageIndex + 1);
          break;
        case 'Escape':
          closeModal();
          break;
      }
    }
  });
}