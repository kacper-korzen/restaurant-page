import pizzaImg from '../images/pizza-home.jpg';
import favPizza1 from '../images/fav-pizza-1.jpg';
import favPizza2 from '../images/fav-pizza-2.jpg';
import favDessert from '../images/deser.jpg';


const favouritesSection = `
  <section class="grid centered-grid ">
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

const openingHoursSection = `
  <section class="centered-grid">
    <div>
      <h2>Godziny otwarcia</h2>
      <p>Pon - Pt &nbsp;&nbsp; 12:00: - 22:00</p>
      <p>Sob - Nd &nbsp;&nbsp; 15:00: - 23:00</p>
    </div>
  </section>
`;

const headerSection = `
  <section class="home">
  <div>
    <h1>„Smak Sycylii: Autentyczne smaki, rodzinna atmosfera”</h2>
    <p>Poczuj ciepło południowych Włoch w każdym kęsie — ręcznie wyrabiana pizza, świeże składniki i sycylijska tradycja prosto na Twoim stole.</p>
  </div>

  <img src="${pizzaImg}" alt="Pizza">
  </section>
`;


const homePage = `
 ${headerSection}
 ${favouritesSection}
 ${openingHoursSection}
`;

export default homePage;