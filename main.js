//--- Hamburger List Menu ---//
const tombolMenu = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.nav-links a');
tombolMenu.addEventListener('click', function() {
    menuNav.classList.toggle('active');
});
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuNav.classList.remove('active');
    });
});