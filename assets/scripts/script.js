
let allElements = document.querySelectorAll('*');

let mainBody = document.querySelector('.main-body');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let themeIcon = document.querySelector('#change-theme');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


themeIcon.onclick = () => {
    themeIcon.classList.toggle('fa-sun');
    themeIcon.classList.toggle('fa-moon');
    mainBody.classList.toggle('dark-theme');
    document.body.classList.toggle('dark-theme');
    allElements.forEach(element => {
        element.classList.toggle('dark-theme');
    });
}
