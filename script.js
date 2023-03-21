let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navabr');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};