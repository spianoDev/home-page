console.log('welcome to the rabbit hole');

const openContactApp = document.getElementById('openContactApp');
const contactApp = document.getElementById('contactApp');
const closeContactApp = document.getElementById('closeContactApp');

const openContact = () => {
    contactApp.style.display = 'block';
};
openContactApp.addEventListener('click', openContact);
const closeContact = () => {
    contactApp.style.display = 'none';
};
closeContactApp.addEventListener('click', closeContact);
