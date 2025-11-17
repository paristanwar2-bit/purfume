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
