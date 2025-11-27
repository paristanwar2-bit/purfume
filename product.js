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


// responsive

document.querySelectorAll(".filter-option").forEach(opt => {
  opt.addEventListener("change", () => {
    console.log("Filter changed: ", opt.value);
  });
});



// popup
// OPEN POPUP
document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        document.getElementById("popupImg").src = this.dataset.img;
        document.getElementById("popupTitle").innerText = this.dataset.title;
        document.getElementById("popupOldPrice").innerText = this.dataset.old;
        document.getElementById("popupNewPrice").innerText = this.dataset.new;

        document.getElementById("popupModal").style.display = "flex";
    });
});

// CLOSE POPUP
document.getElementById("closePopup").onclick = function () {
    document.getElementById("popupModal").style.display = "none";
};

// CLOSE WHEN CLICK OUTSIDE
window.onclick = function (e) {
    if (e.target == document.getElementById("popupModal")) {
        document.getElementById("popupModal").style.display = "none";
    }
};

// Quantity buttons
document.getElementById("minus").onclick = function () {
    let q = parseInt(qty.value);
    if (q > 1) qty.value = q - 1;
};

document.getElementById("plus").onclick = function () {
    let q = parseInt(qty.value);
    qty.value = q + 1;
};






// OPEN POPUP
document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        let card = this.closest(".card");          // card element
        let title = card.querySelector("h3").innerText; // card title

        document.getElementById("popupImg").src = this.dataset.img;
        document.getElementById("popupTitle").innerText = this.dataset.title;
        document.getElementById("popupOldPrice").innerText = this.dataset.old;
        document.getElementById("popupNewPrice").innerText = this.dataset.new;

        // ⭐ DYNAMIC CATEGORY
        document.getElementById("popupCategory").innerText =
            "Categories: " + title;

        document.getElementById("popupModal").style.display = "flex";
    });
});

// CLOSE POPUP
document.getElementById("closePopup").onclick = () => {
    document.getElementById("popupModal").style.display = "none";
};

// OUTSIDE CLICK
window.onclick = (e) => {
    if (e.target === document.getElementById("popupModal")) {
        document.getElementById("popupModal").style.display = "none";
    }
};

// QUANTITY
document.addEventListener("click", (e) => {
    let qty = document.getElementById("qty");

    if (e.target.id === "minus") {
        qty.value = Math.max(1, parseInt(qty.value) - 1);
    }

    if (e.target.id === "plus") {
        qty.value = parseInt(qty.value) + 1;
    }
});




