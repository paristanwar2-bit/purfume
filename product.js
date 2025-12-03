// ---------------- NAVBAR ----------------
function mobileMenuToggle() {
    document.getElementById("menu").classList.toggle("open");
}

// ---------------- FILTER FUNCTION ----------------
// const filters = document.querySelectorAll(".filter");
// const cards = document.querySelectorAll(".card");

// filters.forEach(btn => {
//     btn.addEventListener("click", () => {
//         filters.forEach(f => f.classList.remove("active"));
//         btn.classList.add("active");

//         let category = btn.dataset.category;

//         if (category === "all") {
//             cards.forEach(card => card.style.display = "block");
//             return;
//         }

//         cards.forEach(card => {
//             card.style.display =
//                 card.dataset.category === category ? "block" : "none";
//         });
//     });
// });

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



document.addEventListener("DOMContentLoaded", function () {

    // ACCORDION WORKING
    const heads = document.querySelectorAll(".accordion-btn");

    heads.forEach(h => {
        h.addEventListener("click", () => {

            let sub = h.nextElementSibling;

            if (sub.style.display === "block") {
                sub.style.display = "none";
            } else {
                sub.style.display = "block";
            }
        });
    });

// BUTTONS
const mobileBtn = document.querySelector(".mobile-filter-btn");
const mobileBox = document.getElementById("mobileFilterBox");
const overlay = document.getElementById("filterOverlay");
const closeBtn = document.querySelector(".closeMobileFilter");

// OPEN FILTER
mobileBtn.onclick = () => {
    mobileBox.classList.add("open");
    overlay.style.display = "block";
};

// CLOSE FILTER
function closeFilter() {
    mobileBox.classList.remove("open");
    overlay.style.display = "none";
}

closeBtn.onclick = closeFilter;
overlay.onclick = closeFilter;

// ACCORDION
document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.onclick = () => {
        btn.nextElementSibling.classList.toggle("open");
    };
});
    // FILTER WORKING
    const filters = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".card");

    filters.forEach(f => {
        f.addEventListener("click", () => {

            filters.forEach(x => x.classList.remove("active"));
            f.classList.add("active");

            let cat = f.dataset.category;

            cards.forEach(card => {
                card.style.display =
                    (cat === "all" || card.dataset.category === cat)
                        ? "block" : "none";
            });
        });
    });

});
document.addEventListener("DOMContentLoaded", function () {

    // ACCORDION OPEN/CLOSE
    document.querySelectorAll(".accordion-btn").forEach(btn => {
        btn.onclick = () => {
            btn.nextElementSibling.classList.toggle("open");
        };
    });

    // MOBILE FILTER OPEN/CLOSE
    const mobileBtn = document.querySelector(".mobile-filter-btn");
    const mobileBox = document.getElementById("mobileFilterBox");
    const overlay = document.getElementById("filterOverlay");
    const closeBtn = document.querySelector(".closeMobileFilter");

    mobileBtn.onclick = () => {
        mobileBox.classList.add("open");
        overlay.style.display = "block";
    };

    function closeFilter() {
        mobileBox.classList.remove("open");
        overlay.style.display = "none";
    }

    closeBtn.onclick = closeFilter;
    overlay.onclick = closeFilter;

    // FILTER WORKING - FIXED (NOW INSTANT UPDATE)
    const filters = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".card");

    filters.forEach(f => {
        f.addEventListener("click", () => {

            // ACTIVE CLASS CHANGE
            filters.forEach(x => x.classList.remove("active"));
            f.classList.add("active");

            let cat = f.dataset.category;

            // APPLY FILTER INSTANTLY
            cards.forEach(card => {
                card.style.display =
                    (cat === "all" || card.dataset.category === cat)
                        ? "block"
                        : "none";
            });

            // AUTO CLOSE FILTER ON MOBILE AFTER CLICK
            mobileBox.classList.remove("open");
            overlay.style.display = "none";
        });
    });

});

 

// view more

document.addEventListener("DOMContentLoaded", function () {

    const filters = document.querySelectorAll(".filter");
    const cards = document.querySelectorAll(".card");
    const viewMoreBtn = document.getElementById("viewMoreBtn");

    // FUNCTION: SHOW FIRST 8 CARDS ONLY
    function showLimitedCards() {
        cards.forEach((card, index) => {
            card.style.display = index < 8 ? "block" : "none";
        });
        viewMoreBtn.style.display = "block";
    }

    // FUNCTION: SHOW ALL CARDS
    function showAllCards() {
        cards.forEach(card => card.style.display = "block");
        viewMoreBtn.style.display = "none";
    }

    // CLICK — VIEW MORE BUTTON
    viewMoreBtn.addEventListener("click", showAllCards);

    // CLICK — FILTER BUTTONS
    filters.forEach(f => {
        f.addEventListener("click", () => {

            filters.forEach(x => x.classList.remove("active"));
            f.classList.add("active");

            let cat = f.dataset.category;

            if (cat === "all") {
                showLimitedCards();      // Only first 8 shown
            } else {
                viewMoreBtn.style.display = "none";

                cards.forEach(card => {
                    card.style.display =
                        (card.dataset.category === cat)
                            ? "block"
                            : "none";
                });
            }
        });
    });

    // DEFAULT: SHOW ONLY FIRST 8 ON PAGE LOAD
    showLimitedCards();
});
