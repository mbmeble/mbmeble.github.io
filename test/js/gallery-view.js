// Konfiguracja galerii (taka sama jak w galleries.js)
const galleries = [
    {
        folder: 'Wrocław - Muchobór Wielki',
        title: 'Wrocław - Muchobór Wielki',
        description: 'MInimalistyczny projekt całego mieszkania'
    },
    {
        folder: 'Warszawa - Bobrowiec',
        title: 'Warszawa - Bobrowiec',
        description: 'Meble kuchenne i zabudowa garderoby'
    },
    {
        folder: 'Warszawa-Dąbrówka',
        title: 'Warszawa-Dąbrówka',
        description: 'Kuchnia w kolorze dąb halifax'
    },
    {
        folder: 'Oleśnica',
        title: 'Oleśnica',
        description: 'Meble w całym mieszkaniu z elementami giętymi'
    },
    {
        folder: 'Wrocław - Opatowice',
        title: 'Wrocław - Opatowice',
        description: 'Zabudowa kuchenna - system bezuchwytowy'
    },
    {
        folder: 'Wrocław - Widawa',
        title: 'Wrocław - Widawa',
        description: 'Szafy na wymiar'
    },
	
	{
        folder: 'Pleszew',
        title: 'Pleszew',
        description: 'Umeblowanie domu'
    }
];
let currentImages = [];
let currentImageIndex = 0;

// Pobierz folder z URL
function getFolderFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('folder');
}

// Znajdź galerię po nazwie folderu
function findGallery(folderName) {
    return galleries.find(g => g.folder === folderName);
}

// Załaduj zdjęcia z galerii
async function loadGalleryImages(folderName) {
    const photoGrid = document.getElementById('photoGrid');
    if (!photoGrid) return;
    
    photoGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Ładowanie zdjęć...</p>';

    currentImages = [];
    let imagesLoaded = 0;

    // Próbuj ładować zdjęcia 1.jpg, 2.jpg, 3.jpg... aż do błędu
const checkImage = (index) => {
    return new Promise((resolve) => {
        const img = new Image();
        const path = `images/${folderName}/${index}.jpg`;

        img.onload = () => {
            currentImages.push(path);
            resolve();
        };

        img.onerror = () => resolve(); // po prostu pomijamy brak pliku
        img.src = path;
    });
};

    // Sprawdź pierwsze 50 zdjęć
    for (let i = 1; i <= 50; i++) {
    await checkImage(i);
}

    // Wyświetl zdjęcia
    if (currentImages.length > 0) {
        photoGrid.innerHTML = '';
        currentImages.forEach((imagePath, index) => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.onclick = () => openLightbox(index);

            photoItem.innerHTML = `<img src="${imagePath}" alt="Zdjęcie ${index + 1}">`;
            photoGrid.appendChild(photoItem);
        });
    } else {
        photoGrid.innerHTML = `<p style="text-align: center; grid-column: 1/-1; color: #999;">Brak zdjęć w tej galerii. Dodaj pliki 1.jpg, 2.jpg, 3.jpg... do folderu images/${folderName}/</p>`;
    }
}

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

function openLightbox(index) {
    currentImageIndex = index;
    lightboxImage.src = currentImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    lightboxImage.src = currentImages[currentImageIndex];
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    lightboxImage.src = currentImages[currentImageIndex];
}

if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', showNextImage);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener('click', showPrevImage);
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Klawiatura w lightbox
document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
});

// Inicjalizacja
window.addEventListener('DOMContentLoaded', () => {
    const folderName = getFolderFromURL();
    
    if (!folderName) {
        window.location.href = 'realizacje.html';
        return;
    }

    const gallery = findGallery(folderName);
    
    if (!gallery) {
        window.location.href = 'realizacje.html';
        return;
    }

    // Ustaw tytuł
    const titleElement = document.getElementById('galleryTitle');
    if (titleElement) {
        titleElement.textContent = gallery.title;
    }

    // Załaduj zdjęcia
    loadGalleryImages(folderName);
});