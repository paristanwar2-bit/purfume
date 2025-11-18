function mobileMenuToggle(){
    document.getElementById("menu").classList.toggle("open");
}
let slideIndex = 0;
autoSlide();

function showSlide(){
    let slides = document.querySelectorAll(".banner-slide");
    slides.forEach(s => s.classList.remove("active"));
    if(slideIndex >= slides.length) slideIndex = 0;
    if(slideIndex < 0) slideIndex = slides.length - 1;
    slides[slideIndex].classList.add("active");
}

function autoSlide(){
    slideIndex++;
    showSlide();
    setTimeout(autoSlide, 3000);
}

function changeSlide(n){
    slideIndex += n;
    showSlide();
}



// card
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



let index = 0;

function showInfoSlide(n) {
    let slides = document.querySelectorAll(".info-slide");
    let images = document.querySelectorAll(".perfume-img");
    let dots = document.querySelectorAll(".dot");

    if (n >= slides.length) index = 0;
    if (n < 0) index = slides.length - 1;

    slides.forEach(slide => slide.classList.remove("active"));
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    images[index].classList.add("active");
    dots[index].classList.add("active");
}

function changeInfoSlide(n) {
    index += n;
    showInfoSlide(index);
}

function currentSlide(n) {
    index = n;
    showInfoSlide(index);
}
