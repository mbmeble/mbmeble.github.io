// Menu mobilne
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Zamknij menu po kliknięciu w link
const menuLinks = document.querySelectorAll('.nav-links a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Obsługa formularza kontaktowego
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
        contactForm.reset();
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// zmiejsz logo po scrollu
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const logoImg = document.querySelector('.logo-img');
    const scrollPosition = window.scrollY;
    
    // Zakres scrolla w którym następuje animacja (0-100px)
    const maxScroll = 100;
    const startScroll = 0;
    
    // Wysokości logo
    const startHeight = 50; // początkowa wysokość
    const endHeight = 30;   // końcowa wysokość
    
    if (scrollPosition > startScroll) {
        header.classList.add('scrolled');
        
        // Oblicz progres animacji (0-1)
        let progress = (scrollPosition - startScroll) / (maxScroll - startScroll);
        progress = Math.min(Math.max(progress, 0), 1); // Ogranicz do 0-1
        
        // Oblicz aktualną wysokość logo
        const currentHeight = startHeight - (progress * (startHeight - endHeight));
        
        // Ustaw wysokość
        logoImg.style.height = currentHeight + 'px';
        
    } else {
        header.classList.remove('scrolled');
        logoImg.style.height = startHeight + 'px';
    }
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) { // Zmiana nastąpi po przewinięciu 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// === SLIDER ===
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

// Tworzenie kropek
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dots span');

function showSlide(index) {
  slideIndex = index;
  document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Strzałki
document.querySelector('.prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});
document.querySelector('.next').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});

// Auto-przewijanie
setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 5000);

// Start
showSlide(0);
