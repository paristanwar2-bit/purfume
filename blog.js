// navbar 
function mobileMenuToggle(){
    document.getElementById("menu").classList.toggle("open");
}


// Simple Zoom Animation on Scroll
const cards = document.querySelectorAll(".blog-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        let position = card.getBoundingClientRect().top;
        let screenPos = window.innerHeight;

        if (position < screenPos - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
