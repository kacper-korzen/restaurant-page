import favPizza1 from '../images/fav-pizza-1.jpg';
import favPizza2 from '../images/fav-pizza-2.jpg';
import favDessert from '../images/deser.jpg';

function card(imgName, name, price) {
  const card = document.createElement('div');
  card.classList.add('card', 'grid');

  const img = document.createElement('img');
  img.src = imgName;

  const h3 = document.createElement('h3');
  h3.textContent = name;

  const p = document.createElement('p');
  p.textContent = price;

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(p);

  return card;
}

function cardsSection() {
  const section = document.createElement('section');
  section.classList.add('grid', 'centered-grid');

  const header = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  h2.textContent = 'Menu';
  p.textContent = `Każdy posiłek jest starannie przygotowywany,
  aby zapewnić niezapomniane doznania kulinarne.`;

  header.appendChild(h2);
  header.appendChild(p);

  const cards = document.createElement('div');
  cards.classList.add('grid', 'cards-wrapper');

  cards.appendChild(card(favPizza1, 'Margherita', '10 PLN'));
  cards.appendChild(card(favPizza2, 'Bambinia', '12 PLN'));
  cards.appendChild(card(favDessert, 'Deser', '5 PLN'));


  section.appendChild(header);
  section.appendChild(cards);

  return section;
}

function menuPage(element) {
  element.innerHTML = '';
  element.appendChild(cardsSection());

  return element;
}


export default menuPage;

