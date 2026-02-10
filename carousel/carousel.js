const dots = document.querySelectorAll('.carousel__dot');
const prevBtn = document.querySelector('.carousel__btn_prev');
const nextBtn = document.querySelector('.carousel__btn_next');
const heroElement = document.querySelector('.index-page__hero')

const heroImages = [
    "../index-page/__hero-img/hero-img-1.png",
    "../index-page/__hero-img/hero-img-2.png",
    "../index-page/__hero-img/hero-img-3.png",
    "../index-page/__hero-img/hero-img-4.png",
    "../index-page/__hero-img/hero-img-5.png"
]

prevBtn.addEventListener('click', () => {
    changeSlide(-1);
});

nextBtn.addEventListener('click', () => {
    changeSlide(1);
});

function getCurrentSlideIndex() {
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].hasAttribute('active'))
            return i;
    }
    return 0;
}

function changeSlide(direction) {
    let currentIndex = getCurrentSlideIndex();
    let totalSlides = dots.length;

    dots[currentIndex].removeAttribute('active');

    let newIndex = (currentIndex + direction + totalSlides) % totalSlides;

    dots[newIndex].setAttribute('active','');
    updateHeroImage(newIndex);
}

function updateHeroImage(slideIndex) {
    heroElement.style.backgroundImage = `url(${heroImages[slideIndex]})`;
}