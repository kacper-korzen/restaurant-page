import './css/style.css';
import homePage from './pages/home.js';

const content = document.querySelector('#content');
const navButtons = document.querySelectorAll('nav button');
const logo = document.querySelector('.logo-wrapper');


const pages = {
  home : homePage,
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


