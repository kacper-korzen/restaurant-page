import './css/style.css';
import pizzaImg from './images/pizza-home.jpg';
import favPizza1 from './images/fav-pizza-1.jpg';
import favPizza2 from './images/fav-pizza-2.jpg';
import favDessert from './images/deser.jpg';




function $(selector) {
  return document.querySelector(selector);
}

const content = $('#content');

const favouritesSection = `
  <section class="grid favourites ">
    <div>
      <h2>Ulubione</h2>
      <p>Ulubione pozycje naszych klientów</p>
    </div>

    <div class="grid products">
      <img src="${favPizza1}" alt="Fav Pizza 1">
      <img src="${favPizza2}" alt="Fav Pizza 2">
      <img src="${favDessert}" alt="Fav Dessert">
    </div>
  </section>
`;


const homePage = `
  <section class="home">
    <div>
      <h2>„Smak Sycylii: Autentyczne smaki, rodzinna atmosfera”</h2>
      <p>Poczuj ciepło południowych Włoch w każdym kęsie — ręcznie wyrabiana pizza, świeże składniki i sycylijska tradycja prosto na Twoim stole.</p>
    </div>

    <img src="${pizzaImg}" alt="Pizza">
  </section>

  ${favouritesSection}
`;


function renderHome() {
  content.innerHTML = homePage;
}

renderHome();

