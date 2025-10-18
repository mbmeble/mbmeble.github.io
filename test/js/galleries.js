// Konfiguracja galerii - TUTAJ DODAWAJ SWOJE FOLDERY
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

// Załaduj miniaturki galerii
function loadGalleries() {
    const galleryList = document.getElementById('galleryList');
    if (!galleryList) return;
    
    galleryList.innerHTML = '';

    galleries.forEach(gallery => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        // Link do podstrony galerii
        const link = document.createElement('a');
        link.href = `galeria.html?folder=${gallery.folder}`;
        link.style.textDecoration = 'none';
        link.style.color = 'inherit';

        // Ścieżka do miniatury
        const thumbnailPath = `images/${gallery.folder}/${gallery.folder}.jpg`;

        link.innerHTML = `
            <img src="${thumbnailPath}" alt="${gallery.title}" onerror="this.parentElement.innerHTML='<div class=\\'gallery-placeholder\\'>${gallery.title}</div>'">
            <div class="gallery-item-overlay">
                <div class="gallery-item-title">${gallery.title}</div>
                <div>${gallery.description}</div>
            </div>
        `;

        item.appendChild(link);
        galleryList.appendChild(item);
    });
}

// Inicjalizacja
window.addEventListener('DOMContentLoaded', () => {
    loadGalleries();
});