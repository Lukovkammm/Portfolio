import './style.css';
// import 'aos/dist/aos.css';
import AOS from 'aos';

import {ProjectItem} from './js/ProjectItem';

window.onload = () => {
    document.body.style.opacity = 1;

}

const projectItemConfig = [{
        name: 'Singolo',
        task: 'The layout of the page according to the design. Using JavaScript to create an adaptive menu, slider, and switch tabs in the Portfolio block',
        image: './src/img/singolo.png',
        tags: ['#html', '#scss', '#js', '#webpack', '#github', '#git', '#vscode', '#adaptive'],
        link: 'https://lukovkammm.github.io/singolo/',
    },

    {
        name: 'Whack-A-Mole',
        task: 'The game is based on the speed of reaction, in which you need to click on the goals and earn points.',
        image: './src/img/mole.png',
        tags: ['#html', '#css', '#js', '#github', '#vscode'],
        link: 'https://lukovkammm.github.io/Whack-A-Mole/',
    },

    {
        name: 'Drum Kit',
        task: 'A music application in which you can play sounds by pressing the keys on the keyboard. Each key has its own sound.',
        image: './src/img/drum.png',
        tags: ['#html', '#css', '#js', '#github', '#vscode'],
        link: 'https://lukovkammm.github.io/drum-kit/',
    },

    {
        name: 'Dynamic Page',
        task: 'Create a landing page that shows the time and name of the user, his tasks for the current day. The background image changes depending on the time of day. The application uses local storage to store data.',
        image: './src/img/dynamic_page.png',
        tags: ['#html', '#css', '#js', '#github', '#vscode'],
        link: 'https://lukovkammm.github.io/Dynamic-Landing-Page/',
    },

    {
        name: 'Flex Panel Gallery',
        task: 'Image slider in JavaScript.',
        image: './src/img/gallery.png',
        tags: ['#html', '#css', '#js', '#github', '#vscode'],
        link: 'https://lukovkammm.github.io/flex-panel-gallery/',
    },

    {
        name: 'Virtual Keyboard',
        task: 'Project to create a virtual keyboard',
        image: './src/img/keyboard.png',
        tags: ['#html', '#css', '#js', '#github', '#vscode'],
        link: 'https://lukovkammm.github.io/Virtual-Keyboard/',
    },

    {
        name: 'Fun with Canvas',
        task: 'Canvas on which you can draw lines. You can choose the color and thickness of the line.',
        link: 'https://lukovkammm.github.io/Fun-with-HTML5-Canvas/',
        image: './src/img/canvas.png',
        tags: ['#html', '#canvas', '#css', '#js', '#github', '#vscode'],
    },

    {
        name: 'Meditation App',
        task: 'An app for relaxation and meditation. Users can choose different timers and sounds.',
        link: 'https://lukovkammm.github.io/Meditation-App/',
        image: './src/img/meditation.png',
        tags: ['#html', '#css', '#js', '#github', '#vscode'],
    },

    {
        name: 'Raindrop',
        task: 'The application is a math simulator. The arithmetic condition is written in a drop of rain that falls at a certain speed. You need to enter the answer before the drop falls.',
        link: 'https://lukovkammm.github.io/Raindrop/',
        image: './src/img/raindop.png',
        tags: ['#html', '#css', '#js', '#github', '#vscode'],
    },

    {
        name: 'Unschooler',
        task: 'The layout of the page according to the design. Using JavaScript to create an adaptive menu',
        link: 'https://lukovkammm.github.io/unschooler/',
        image: './src/img/unshcooler.png',
        tags: ['#html', '#scss', '#js', '#webpack', '#github', '#git', '#vscode', '#adaptive'],
    },

    {
        name: 'Fancy weather',
        task: 'App-weather forecast. It consists of four functional blocks. A control block that includes buttons for updating the background image, switching the language and temperature units, a search bar, the weather for today and the forecast for three days, geolocation data',
        link: 'https://lukovkammm.github.io/fancy-weather/',
        image: './src/img/weather1.png',
        tags: ['#html', '#css', '#js', '#api', '#github', '#vscode'],
    },

    {
        name: 'Calculator',
        task: 'Creating a calculator that performs mathematical operations.',
        image: './src/img/calculator.png',
        tags: ['#js', '#github', '#vscode'],
        link: 'https://lukovkammm.github.io/calculator/',
    }
];

const itemsWrapper = document.querySelector('.projects__list');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const main = document.querySelector('main');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_isActive');
    navigation.classList.toggle('open');
});

main.addEventListener('click', () => {
    if (navigation.classList.contains('open')) {
        navigation.classList.remove('open');
        hamburger.classList.toggle('hamburger_isActive');
    }
});

navigation.onclick = function (event) {
    let target = event.target;
    if (target.className !== 'navigation__link') return;
    navigation.classList.remove('open');
    hamburger.classList.toggle('hamburger_isActive');
}

// const modalCloseBtn = document.querySelector('.modal__close');

projectItemConfig.forEach((item, index) => {
    let generated = new ProjectItem(item).generateItem(index);
    itemsWrapper.insertAdjacentElement('beforeend', generated);
})

itemsWrapper.addEventListener('click', (e) => {
    if (e.target.closest('li')) {
        overlay.classList.add('show');
       
        const clickedItem = e.target.closest('li');
        const index = clickedItem.getAttribute('data-index');
        const item = projectItemConfig[index];
        new ProjectItem(item).generateModal();
    }
});

modal.addEventListener('click', closeModal);


function closeModal(e) {
    if (e.target.classList.contains('modal__close')) {
        modal.classList.remove('show');
        overlay.classList.remove('show');
    }
}



AOS.init({
    duration: 2000,
})

// document.addEventListener('aos:in', ({ detail }) => {
//     console.log('animated in', detail);
// });

// document.addEventListener('aos:out:super-duper', ({ detail }) => {
//     console.log('animated out', detail);
// });