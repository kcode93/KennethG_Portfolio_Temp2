//Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBrand = document.querySelector('.menu-brand');
const navItem = document.querySelectorAll('.nav-item');

//Set Initial Value of Menu
let showMenu = false;

//Even Listener
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){

        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));

        //Reset state
        showMenu = true;

    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));

        //Reset state
        showMenu = false;
    }
}