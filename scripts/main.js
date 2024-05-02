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

const mainNavTabs = Array.from(document.querySelectorAll('.main-nav .ul-item'));
mainNavTabs.forEach(tab => tab.addEventListener('click', showTabScreen));

function showTabScreen(event) {
    let dataValue;

    if (event.type == 'DOMContentLoaded') {

        tabScreens.forEach(element => {
            dataValue = element.getAttribute('data-tab');
            if (dataValue != 'my-area') {
                element.classList.toggle('tab-active');
            }
        })
        tabs
            .find(element => element.classList.contains('my-area'))
            .classList
            .add('tab-selected');
    } else {

        const clickedTab = event.currentTarget;
        const clickedTabClass = clickedTab.classList[1];

        tabScreens
            .forEach(screen => screen.classList.remove('tab-active'));
        tabScreens
            .find(screen => screen.getAttribute('data-tab') == clickedTabClass)
            .classList
            .add('tab-active')

        mainNavTabs.forEach(tab => tab.classList.remove('tab-selected'));
        clickedTab.classList.add('tab-selected');
    }
}



