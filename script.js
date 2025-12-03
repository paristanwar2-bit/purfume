// home page code 
// navbar
function mobileMenuToggle(){
    document.getElementById("menu").classList.toggle("open");
}


// =================== BANNER SLIDER ===================
let bannerIndex = 0;
autoSlide();

function showSlide(){
    let slides = document.querySelectorAll(".banner-slide");
    slides.forEach(s => s.classList.remove("active"));
    if(bannerIndex >= slides.length) bannerIndex = 0;
    if(bannerIndex < 0) bannerIndex = slides.length - 1;
    slides[bannerIndex].classList.add("active");
}

function autoSlide(){
    bannerIndex++;
    showSlide();
    setTimeout(autoSlide, 3000);
}

function changeSlide(n){
    bannerIndex += n;
    showSlide();
}



// =================== PRODUCT INFO SLIDER ===================
let infoIndex = 0;

function showInfoSlide(n) {
    let slides = document.querySelectorAll(".info-slide");
    let images = document.querySelectorAll(".perfume-img");
    let dots = document.querySelectorAll(".dot");

    if (n >= slides.length) infoIndex = 0;
    if (n < 0) infoIndex = slides.length - 1;

    slides.forEach(s => s.classList.remove("active"));
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[infoIndex].classList.add("active");
    images[infoIndex].classList.add("active");
    dots[infoIndex].classList.add("active");
}

function changeInfoSlide(n) {
    infoIndex += n;
    showInfoSlide(infoIndex);
}

function currentSlide(n) {
    infoIndex = n;
    showInfoSlide(infoIndex);
}



// testimonial 
let testiIndex = 0;
const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".testimonial-card");
let cardWidth;

function updateWidth() {
    cardWidth = cards[0].offsetWidth + 20;
}
updateWidth();

window.addEventListener("resize", updateWidth);

document.getElementById("nextBtn").addEventListener("click", () => {
    testiIndex++;
    if (testiIndex >= cards.length) testiIndex = 0;
    slider.style.transform = `translateX(-${testiIndex * cardWidth}px)`;
});

document.getElementById("prevBtn").addEventListener("click", () => {
    testiIndex--;
    if (testiIndex < 0) testiIndex = cards.length - 1;
    slider.style.transform = `translateX(-${testiIndex * cardWidth}px)`;
});



// =================== QUICK VIEW ===================
function quickView(imgPath){
    document.getElementById("quickImage").src = imgPath;
    document.getElementById("quickViewBox").style.display = "flex";
}

function closeQuickView(){
    document.getElementById("quickViewBox").style.display = "none";
}

function wishlist(){
    alert("Added to Wishlist ❤️");
}
