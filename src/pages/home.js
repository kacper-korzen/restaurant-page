import pizzaImg from '../images/pizza-home.jpg';
import favPizza1 from '../images/fav-pizza-1.jpg';
import favPizza2 from '../images/fav-pizza-2.jpg';
import favDessert from '../images/deser.jpg';

function favouritesSection() {
  const section = document.createElement('section');
  section.classList.add('grid', 'centered-grid');

  const favouritesSection = `
    <div>
      <h2>Ulubione</h2>
      <p>Ulubione pozycje naszych klientów</p>
    </div>

    <div class="grid products">
      <img src="${favPizza1}" alt="Fav Pizza 1">
      <img src="${favPizza2}" alt="Fav Pizza 2">
      <img src="${favDessert}" alt="Fav Dessert">
    </div>
  `;

  section.innerHTML = favouritesSection;

  return section;
}

function openingHoursSection() {
  const section = document.createElement('section');
  section.classList.add('centered-grid');

  const openingHoursSection = `
    <div>
      <h2>Godziny otwarcia</h2>
      <p>Pon - Pt &nbsp;&nbsp; 12:00: - 22:00</p>
      <p>Sob - Nd &nbsp;&nbsp; 15:00: - 23:00</p>
    </div>
  `;

  section.innerHTML = openingHoursSection;

  return section;
}

function headerSection() {
  const section = document.createElement('section');
  section.classList.add('home');

  const headerSection = `
  <div>
    <h1>„Smak Sycylii: Autentyczne smaki, rodzinna atmosfera”</h2>
    <p>Poczuj ciepło południowych Włoch w każdym kęsie — ręcznie wyrabiana pizza, świeże składniki i sycylijska tradycja prosto na Twoim stole.</p>
  </div>

  <img src="${pizzaImg}" alt="Pizza">
  `;

  section.innerHTML = headerSection;

  return section;
}

function homePage(element) {
  element.innerHTML = '';
  element.appendChild(headerSection());
  element.appendChild(favouritesSection());
  element.appendChild(openingHoursSection());

  return element;
}

export default homePage;
