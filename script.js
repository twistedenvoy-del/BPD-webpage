const showMoreBtns = document.querySelectorAll(".show-more-btn");

showMoreBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        const card = this.closest(".card");
        const extraInfo = card.querySelector(".extra-info");
        
        if (extraInfo.style.display === "none") {
            extraInfo.style.display = "block";
            this.textContent = "Show Less";
        } else {
            extraInfo.style.display = "none";
            this.textContent = "Show More";
        }
    });
});
