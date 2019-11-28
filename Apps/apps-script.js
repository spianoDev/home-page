console.log('welcome to the rabbit hole');
const atmButton = document.getElementById('atm');

atmButton.addEventListener('click', function (e) {
    if (e.target) {
        window.location.href = "http://spiano.dev/atm";
    }
});