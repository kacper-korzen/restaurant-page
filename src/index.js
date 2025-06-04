import './css/style.css';
import homePage from './pages/home.js';

const content = document.querySelector('#content');
const navButtons = document.querySelectorAll('nav button');
const logo = document.querySelector('.logo-wrapper');

const pages = {
  homePage,
}

logo.addEventListener('click', () => {
  renderPage(homePage);
})

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const page = button.dataset.page;
    renderPage(pages[page]);
  })
})

function renderPage (page) {
  content.innerHTML = page;
}

renderPage(homePage);



