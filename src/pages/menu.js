import favPizza1 from '../images/fav-pizza-1.jpg';
import favPizza2 from '../images/fav-pizza-2.jpg';
import favDessert from '../images/deser.jpg';

function card(img, name, price) {
  const card = document.createElement('div');
  card.classList.add('card', 'grid');

  const cardContent = `
    <div>
      <img src="${img}" alt="Pizza">
      <h3>${name}</h3>
      <p>${price}</p>
    </div>
  `;

  card.innerHTML = cardContent.toString();
  return card;
}

function cardsSection() {
  const section = document.createElement('section');
  section.classList.add('grid', 'centered-grid');

  const cardsSection = `
    <div>
      <h2>Menu</h2>
      <p>Każdy posiłek jest starannie przygotowywany,
      aby zapewnić niezapomniane doznania kulinarne.</p>
    </div>

    <div class="grid products">
      ${card(favPizza1, 'Margherita', '10 PLN').innerHTML}
      ${card(favPizza2, 'Bambinia', '12 PLN').innerHTML}
      ${card(favDessert, 'Deser', '5 PLN').innerHTML}
    </div>
  `;


  section.innerHTML = cardsSection;

  return section;
}

function menuPage(element) {
  element.innerHTML = '';
  element.appendChild(cardsSection());

  return element;
}

export default menuPage;
