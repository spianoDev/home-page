console.log('welcome to the rabbit hole');

const openContactGames = document.getElementById('openContactGames');
const contactGames = document.getElementById('contactGames');
const closeContactGames = document.getElementById('closeContactGames');

const openContact = () => {
    contactGames.style.display = 'block';
};
openContactGames.addEventListener('click', openContact);
const closeContact = () => {
    contactGames.style.display = 'none';
};
closeContactGames.addEventListener('click', closeContact);
