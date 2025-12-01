// ---------------- NAVBAR ----------------
function mobileMenuToggle() {
    document.getElementById("menu").classList.toggle("open");
}



// ---------------- FILTER FUNCTION ----------------
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        filters.forEach(f => f.classList.remove("active"));
        btn.classList.add("active");

        let category = btn.dataset.category;

        if (category === "all") {
            cards.forEach(card => card.style.display = "block");
            return;
        }

        cards.forEach(card => {
            card.style.display =
                card.dataset.category === category ? "block" : "none";
        });
    });
});



// pop up 

const qty = document.getElementById("qty");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", () => {
    qty.value = Number(qty.value) + 1;
});

minus.addEventListener("click", () => {
    if (qty.value > 1) {
        qty.value = Number(qty.value) - 1;
    }
});


// ---------------- POPUP FUNCTION ----------------
const viewButtons = document.querySelectorAll(".view-btn");
const popup = document.getElementById("popupModal");

const popupImg = document.getElementById("popupImg");
const popupTitle = document.getElementById("popupTitle");
const popupOldPrice = document.getElementById("popupOldPrice");
const popupNewPrice = document.getElementById("popupNewPrice");

const closePopup = document.getElementById("closePopup");

viewButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        popupImg.src = btn.dataset.img;
        popupTitle.textContent = btn.dataset.title;
        popupOldPrice.textContent = btn.dataset.old;
        popupNewPrice.textContent = btn.dataset.new;

        popup.style.display = "flex";
    });
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});
