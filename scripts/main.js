const hamburger = document.querySelector('header .hamburger');
const closeIcon = document.querySelector('header .close-icon');
const mainMenu = document.querySelector('header .main-menu');

hamburger.addEventListener('click', transitionToMainMenu);
closeIcon.addEventListener('click', transitionToMainMenu);

function transitionToMainMenu(e) {

    mainMenu.classList.toggle('is-active');
    hamburger.classList.toggle('is-visible');
    closeIcon.classList.toggle('is-visible');
}

