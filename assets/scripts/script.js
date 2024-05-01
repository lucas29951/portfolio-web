
let allElements = document.querySelectorAll('*');

let mainBody = document.querySelector('.main-body');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let themeIcon = document.querySelector('#change-theme');

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('form-message');


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

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1di1xpg','template_y5py13c','#contact-form','R5jvvMsKpHPyuM2Qu')
    .then(() => {
        contactMessage.textContent = 'Mensaje enviado con exito!';
        contactMessage.style.display = "block";
        
        if (mainBody.classList.contains('dark-theme')) { 
            contactMessage.style.background = "var(--color-success-dark)";
        } else { 
            contactMessage.style.background = "var(--color-success)"; 
        }

        setTimeout(() => {
            contactMessage.textContent = '';
            contactMessage.style.display = "none";
        }, 5000)

        contactForm.reset();
    }, () => {
        contactMessage.textContent = 'Mensaje no enviado! (Error de servicio).';
        contactMessage.style.display = "block";

        if (mainBody.classList.contains('dark-theme')) { 
            contactMessage.style.background = "var(--color-error-dark)";
        } else { 
            contactMessage.style.background = "var(--color-error)"; 
        }
    })
};

contactForm.addEventListener('submit', sendEmail);
