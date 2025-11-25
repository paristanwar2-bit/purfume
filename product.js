// navbar
function mobileMenuToggle(){
    document.getElementById("menu").classList.toggle("open");
}

// FILTER CLICK FUNCTION
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filters.forEach(btn => {
    btn.addEventListener("click", () => {

        // Active class
        filters.forEach(f => f.classList.remove("active"));
        btn.classList.add("active");

        let category = btn.dataset.category;

        // Show All
        if (category === "all") {
            cards.forEach(card => card.style.display = "block");
            return;
        }

        // Filter specific
        cards.forEach(card => {
            card.style.display =
                card.dataset.category === category ? "block" : "none";
        });
    });
});
