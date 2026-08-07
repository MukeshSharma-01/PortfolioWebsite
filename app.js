AOS.init({
    duration: 800,
    once: false,
    offset: 100,
    easing: "ease-out-cubic",
    mirror: true
});

const menuBtn = document.querySelector(".nav3");
const navMenu = document.querySelector(".navlists");
const navLinks = document.querySelectorAll(".navlists a");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");
    console.log("Menu button clicked");

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});
