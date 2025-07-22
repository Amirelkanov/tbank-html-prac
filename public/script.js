function toggleBurgerMenu() {
    const nav = document.querySelector('.pages-nav');
    nav.classList.toggle('open');
}

document.addEventListener('click', function (e) {
    const nav = document.querySelector('.pages-nav');
    if (nav.contains(e.target) && nav.contains(e.target.parentElement)) {
        nav.classList.remove('open');
    }
});
