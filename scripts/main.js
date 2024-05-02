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

document.addEventListener('DOMContentLoaded', showTabScreen)

const tabScreens = Array.from(document.querySelectorAll('[data-tab]'));
const tabs = Array.from(document.querySelectorAll('.main-nav .ul-item'));
console.log(tabs)

function showTabScreen() {
    let dataValue;

    tabScreens.forEach(element => {
        console.log(element)
        dataValue = element.getAttribute('data-tab');
        console.log(dataValue)
        if (dataValue != 'my-area') {
            element.classList.toggle('tab-active');
        }
    })

    tabs.find(element => element.classList.contains('my-area')).setAttribute('style', 'background-color: #e8e8e8')
}





