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