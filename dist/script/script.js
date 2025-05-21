//Hamburger
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});

//klik diluar hamburger
window.addEventListener('click', (e) => {
    if (e.target !== hamburger && e.target !== nav && !nav.contains(e.target)) {
        hamburger.classList.remove('hamburger-active');
        nav.classList.add('hidden');
    }
});

window.onscroll = function() {
    const toTop = document.querySelector('#to-top');
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
}

//dark mode toggle
const darkMode = document.querySelector('#dark-toggle');
const html = document.querySelector('html');
darkMode.addEventListener('click', () =>{
    html.classList.toggle('dark');
});