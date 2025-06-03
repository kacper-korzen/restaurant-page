import './css/style.css';
import pizzaImg from './images/pizza-home.jpg';

function $(selector) {
  return document.querySelector(selector);
}

const content = $('#content');


const homePage = `
  <div class="home">
    <div>
      <h2>„Smak Sycylii: Autentyczne smaki, rodzinna atmosfera”</h2>
      <p>Poczuj ciepło południowych Włoch w każdym kęsie — ręcznie wyrabiana pizza, świeże składniki i sycylijska tradycja prosto na Twoim stole.</p>
    </div>

    <img src="${pizzaImg}" alt="Pizza">
  </div>
`;



function renderHome() {
  content.innerHTML = homePage;
}

renderHome();