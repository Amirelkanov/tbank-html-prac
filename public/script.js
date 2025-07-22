function toggleBurgerMenu() {
    const nav = document.querySelector('.pages-nav');
    nav.classList.toggle('open');
}

document.querySelector('.main-pg-header').addEventListener('click', function (e) {
    const nav = document.querySelector('.pages-nav');
    if (nav.contains(e.target) && nav.contains(e.target.parentElement)) {
        nav.classList.remove('open');
    }
});


function toggleTheme() {
    document.body.classList.toggle('dark');
    document.querySelector('.theme-btn').firstElementChild.classList.toggle('fa-regular');
    document.querySelector('.theme-btn').firstElementChild.classList.toggle('fa-solid');
}

function downloadFile(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();
    link.click();
}