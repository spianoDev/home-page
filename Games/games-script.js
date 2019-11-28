console.log('welcome to the rabbit hole');

const landscaperButton = document.getElementById('landscaper');
const spaceButton = document.getElementById('space-battle');
const simonButton = document.getElementById('simon');

landscaperButton.addEventListener('click', function (e) {
    if (e.target) {
        window.location.href = "http://spiano.dev/landscaper";
    }
});

spaceButton.addEventListener('click', function (e) {
    if (e.target) {
        window.location.href = "http://spiano.dev/spacebattle";
    }
});

simonButton.addEventListener('click', function (e) {
    if (e.target) {
        window.location.href = "http://spiano.dev/simon";
    }
});