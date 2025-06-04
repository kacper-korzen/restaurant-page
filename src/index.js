import './css/style.css';
import homePage from './pages/home.js';
import menuPage from './pages/menu.js';

const content = document.querySelector('#content');
const navButtons = document.querySelectorAll('nav button');
const logo = document.querySelector('.logo-wrapper');


const pages = {
  home : homePage,
  menu : menuPage,
}

logo.addEventListener('click', () => {
  homePage(content);
})

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const page = button.dataset.page;
    pages[page](content);
  })
})


document.body.onload = () => homePage(content);


