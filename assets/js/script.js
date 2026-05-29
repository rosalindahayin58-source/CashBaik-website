// ========================= BACK TO TOP BUTTON =========================
const backToTopBtn = document.getElementById('backToTopBtn');

if (backToTopBtn) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================= HAMBURGER MENU =========================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const hamburgerIcon = hamburgerBtn ? hamburgerBtn.querySelector('i') : null;

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        navMenu.classList.toggle('active');
        // Toggle icon between bars and X
        if (hamburgerIcon) {
            hamburgerIcon.classList.toggle('fa-bars');
            hamburgerIcon.classList.toggle('fa-times');
        }
    });

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            if (hamburgerIcon) {
                hamburgerIcon.classList.add('fa-bars');
                hamburgerIcon.classList.remove('fa-times');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            if (hamburgerIcon) {
                hamburgerIcon.classList.add('fa-bars');
                hamburgerIcon.classList.remove('fa-times');
            }
        }
    });
}