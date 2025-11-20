
function mobileMenuToggle(){
    document.getElementById("menu").classList.toggle("open");
}




const filterBtns = document.querySelectorAll(".filter-box ul li");
const cards = document.querySelectorAll(".product-card");
const msg = document.querySelector(".msg");

// Hide all cards at start
cards.forEach(c => c.style.display = "none");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        // active effect
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        msg.style.display = "none"; // hide message on click

        cards.forEach(card => {
            if (filterValue === "all") {
                card.style.display = "block";
            } 
            else if (card.classList.contains(filterValue)) {
                card.style.display = "block";
            } 
            else {
                card.style.display = "none";
            }
        });

    });
});
