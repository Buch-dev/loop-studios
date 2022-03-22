const closeBtn = document.querySelector('.closeMenu');
const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu');

closeBtn.addEventListener('click', menuSlideShow);
menuBtn.addEventListener('click', menuSlideShow);


function menuSlideShow() {
    menu.classList.toggle('menu-show');
}