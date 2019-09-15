console.log('welcome to the rabbit hole');
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

const openModal = () => {
    modal.style.display = 'block';
};

openBtn.addEventListener('click', openModal);
const closeModal = () => {
    modal.style.display = 'none'
};
close.addEventListener('click', closeModal);

const miniGamesButton = document.getElementById('mini-games');
const practicalAppsButton = document.getElementById('practical-apps');
const funStuffButton = document.getElementById('fun-stuff');

function newPage(page) {
    page.addEventListener('click', function (e) {
        if (page === miniGamesButton) {
            window.location.href = "http://spiano.dev/home-page/mini-games.html";
        } else if (page === practicalAppsButton) {
            window.location.href = "http://spiano.dev/home-page/practical-apps.html";
        } else if (page === funStuffButton) {
            window.location.href = "http://spiano.dev/home-page/fun-stuff.html";
        }

    })
}