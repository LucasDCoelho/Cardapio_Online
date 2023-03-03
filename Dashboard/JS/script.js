
const menuHamburguer = document.getElementById('hamburguer');
const closeMenu = document.getElementById('close');

const asideModal = document.getElementById('aside-menu');

menuHamburguer.addEventListener('click', ()=>{
    asideModal.classList.add('show');
});

closeMenu.addEventListener('click', ()=>{
    asideModal.classList.remove('show');
});
