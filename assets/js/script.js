const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuMobile = document.getElementById('mobileMenu');

hamburgerMenu.addEventListener('click', function () {
    this.classList.toggle('active');

    menuMobile.classList.toggle('active');
});