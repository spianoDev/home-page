console.log('welcome to the rabbit hole');

const landscaperButton = document.getElementById('landscaper');
const spaceButton = document.getElementById('space-battle');

miniGamesButton.addEventListener('click', function (e) {
    if (e.target) {
        window.location.href = "http://spiano.dev/landscaper";
    }
});

spaceButton.addEventListener('click', function (e) {
    if (e.target) {
        window.location.href = "http://spiano.dev/spacebattle";
    }
});