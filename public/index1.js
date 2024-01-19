
const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".allLinks");

hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        links.classList.toggle("active");
    });
