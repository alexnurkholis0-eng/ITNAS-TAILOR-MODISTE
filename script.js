// ==========================
// ANIMASI FADE (Intersection Observer)
// ==========================

const faders = document.querySelectorAll('.fade');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('show');
        observer.unobserve(entry.target); // animasi hanya sekali
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// ==========================
// SLIDER PREMIUM
// ==========================

function scrollSlider(button, direction) {
    const slider = button.parentElement.querySelector('.premium-slider');
    slider.scrollBy({
        left: 400 * direction,
        behavior: 'smooth'
    });
}


// ==========================
// LIGHTBOX (Klik gambar → tampil besar)
// ==========================

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// ==========================
// SLIDER WANITA (PER BARIS)
// ==========================

function scrollRow(button, direction) {
    const wrapper = button.parentElement;
    const row = wrapper.querySelector('.slider-row');

    row.scrollBy({
        left: 400 * direction,
        behavior: 'smooth'
    });
}