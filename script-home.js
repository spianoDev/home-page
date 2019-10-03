console.log('welcome to the rabbit hole');
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');
const resumeButton = document.getElementById('resume');

const openModal = () => {
    modal.style.display = 'block';
};
openBtn.addEventListener('click', openModal);
const closeModal = () => {
    modal.style.display = 'none';
};
close.addEventListener('click', closeModal);
const openResume = () => {
    modal.style.display = 'none';
    document.getElementById('resume-pdf').window.location.href = "WebDev-Resume.pdf";
};
resumeButton.addEventListener('click', openResume);

const miniGamesButton = document.getElementById('mini-games');
const practicalAppsButton = document.getElementById('practical-apps');
const funStuffButton = document.getElementById('fun-stuff');


miniGamesButton.addEventListener('click', function (e) {
    if (e.target) {
            window.location.href = "http://spiano.dev/mini-games.html";
        }
    });
practicalAppsButton.addEventListener('click', function (e) {
    if (e.target) {
        window.location.href = "http://spiano.dev/practical-apps.html";
    }
    });
funStuffButton.addEventListener('click', function (e) {
    if (e.target) {
    window.location.href = "http://spiano.dev/fun-stuff.html";
    }
});






