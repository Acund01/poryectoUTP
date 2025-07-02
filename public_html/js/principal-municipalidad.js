/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.addEventListener('DOMContentLoaded', function () {
    initCarousel();
    initInfoSection();
    initModal();
});

function initCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    if (!carouselImages)
        return;

    const totalSlides = document.querySelectorAll('.carousel-images img').length;
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

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(index + 1);
            resetInterval();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(index - 1);
            resetInterval();
        });
    }

    startCarousel();

    carouselImages.parentElement.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    carouselImages.parentElement.addEventListener('mouseleave', () => {
        startCarousel();
    });
}

function initInfoSection() {
    const infoBtn = document.getElementById('infoBtn');
    const moreInfo = document.getElementById('moreInfo');

    if (infoBtn && moreInfo) {
        infoBtn.addEventListener('click', function () {
            moreInfo.classList.toggle('hidden');
            infoBtn.textContent = moreInfo.classList.contains('hidden') ?
                    'Ver más información' : 'Ver menos información';
        });
    }
}

// Modal para galería de fotos
function initModal() {
    const modal = document.getElementById('galleryModal');
    const openModalBtn = document.getElementById('openModalBtn');
    if (!modal || !openModalBtn)
        return;

    const closeModalBtn = document.querySelector('.close-modal');
    const modalImages = document.getElementById('modalImages');
    const prevModalBtn = document.getElementById('prevModal');
    const nextModalBtn = document.getElementById('nextModal');

    // Imágenes para la galería modal
    const galleryImages = [
        {src: 'imagenes/catedral.jpg', alt: 'Catedral de Arequipa'},
        {src: 'imagenes/yanahuara.jpg', alt: 'Barrio de Yanahuara'},
        {src: 'imagenes/monasterio.jpg', alt: 'Monasterio de Santa Catalina'},
        {src: 'imagenes/bolognesi.jpg', alt: 'Puente Bolognesi'},
        {src: 'imagenes/colca.jpg', alt: 'Cañon del Colca'}
    ];

    let currentImageIndex = 0;

    // Llenar 
    function loadModalImages() {
        modalImages.innerHTML = '';

        galleryImages.forEach((img, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = img.src;
            imgElement.alt = img.alt;
            imgElement.style.display = index === 0 ? 'block' : 'none';
            modalImages.appendChild(imgElement);
        });
    }

    // Mostrar
    function showImage(index) {
        const images = modalImages.querySelectorAll('img');
        currentImageIndex = (index + images.length) % images.length;

        images.forEach((img, i) => {
            img.style.display = i === currentImageIndex ? 'block' : 'none';
        });
    }

    // Abrir 
    openModalBtn.addEventListener('click', function () {
        loadModalImages();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Cerrar 
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function () {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Cerrar al hacer clic 
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    if (prevModalBtn) {
        prevModalBtn.addEventListener('click', function () {
            showImage(currentImageIndex - 1);
        });
    }

    if (nextModalBtn) {
        nextModalBtn.addEventListener('click', function () {
            showImage(currentImageIndex + 1);
        });
    }

    document.addEventListener('keydown', function (event) {
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                showImage(currentImageIndex - 1);
            } else if (event.key === 'ArrowRight') {
                showImage(currentImageIndex + 1);
            } else if (event.key === 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
}

