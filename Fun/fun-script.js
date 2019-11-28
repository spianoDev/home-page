console.log('welcome to the rabbit hole');
const pixButton = document.getElementById('pixart');

pixButton.addEventListener('click', function (e) {
    if (e.target) {
        window.location.href = "http://spiano.dev/pixart";
    }
});