const cardMain = document.querySelector(".card-1");
const cardThanks = document.querySelector(".card-2");
const submitBtn = document.querySelector(".submit");

const userRating = document.querySelector(".user-rate");
const ratingBtns = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", function(){
    cardThanks.classList.remove("hidden");
    cardMain.classList.add("hidden");
})

ratingBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        userRating.innerText = btn.innerText
    })
})