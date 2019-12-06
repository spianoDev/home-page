console.log('welcome to the rabbit hole');

const openContactTech = document.getElementById('openContactTech');
const contactTech = document.getElementById('contactTech');
const closeContactTech = document.getElementById('closeContactTech');

const openContact = () => {
    contactTech.style.display = 'block';
};
openContactTech.addEventListener('click', openContact);
const closeContact = () => {
    contactTech.style.display = 'none';
};
closeContactTech.addEventListener('click', closeContact);
