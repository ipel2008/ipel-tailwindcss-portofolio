//Hamburger
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');
addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});