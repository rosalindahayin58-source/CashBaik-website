const checkBtn = document.getElementById('checkBtn');
const merchantInput = document.getElementById('merchantInput');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

/* TOMBOL CEK PROMO */
checkBtn.addEventListener('click', function(){
    if(merchantInput.value == ''){
        alert('Silakan masukkan nama merchant anda terlebih dahulu ');
    } else {
        alert('Promo cashback untuk ' + merchantInput.value + ' berhasil ditemukan 🎉');
    }
});

/* ANIMASI JUDUL */
const heading = document.querySelector('.hero-content h1');

heading.addEventListener('mouseover', function(){
    heading.style.color = '#0762eb';
    heading.style.transition = '0.3s';
});

heading.addEventListener('mouseout', function(){
    heading.style.color = '#222';
});

/* MENU HAMBURGER MOBILE */
hamburgerBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Ganti ikon burger menjadi silang saat dibuka
    const icon = this.querySelector('i');
    if(navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

/* TUTUP MENU SAAT LINK DIKLIK (MOBILE) */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.querySelector('i').classList.remove('fa-times');
        hamburgerBtn.querySelector('i').classList.add('fa-bars');
    });
});