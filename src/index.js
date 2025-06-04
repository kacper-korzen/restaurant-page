import './css/style.css';
import homePage from './pages/home.js';

const content = document.querySelector('#content');


function renderHome() {
  content.innerHTML = homePage;
}

renderHome();

