
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let ouverlay = document.getElementById('ouverlay-menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

ouverlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

