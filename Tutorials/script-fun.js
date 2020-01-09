console.log('welcome to the rabbit hole');

const openContactFun = document.getElementById('openContactFun');
const contactFun = document.getElementById('contactFun');
const closeContactFun = document.getElementById('closeContactFun');

const openContact = () => {
    contactFun.style.display = 'block';
};
openContactFun.addEventListener('click', openContact);
const closeContact = () => {
    contactFun.style.display = 'none';
};
closeContactFun.addEventListener('click', closeContact);
