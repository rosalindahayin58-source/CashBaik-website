const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = hamburgerBtn.querySelector("i");

    if(navMenu.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    }else{
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});

/* CEK PROMO */

const checkBtn = document.getElementById("checkBtn");
const merchantInput = document.getElementById("merchantInput");

checkBtn.addEventListener("click", () => {

    const merchant = merchantInput.value.trim();

    if(merchant === ""){
        alert("Silakan masukkan nama merchant terlebih dahulu");
    }else{
        window.open("https://cashbaik.com", "_blank");
    }

});

/* TUTUP MENU MOBILE */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = hamburgerBtn.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});

/* ACTIVE NAVBAR SAAT SCROLL */

const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }

    });


});

/* SPLIDE SLIDER */

document.addEventListener('DOMContentLoaded', function () {

    new Splide('#caraKerjaSlider', {
        type       : 'slide',
        perPage    : 5,
        gap        : '20px',
        pagination : false,
        arrows     : false,
        drag       : true,

        breakpoints: {
            900: {
                perPage: 2,
            },

            600: {
                perPage: 1,
            }
        }
    }).mount();

});