import tables from '../images/tables.jpg';

function aboutSection() {
  const aboutSectionContent = `
      <div>
        <h2>O nas</h2>
        <p>Mała Sycylia zrodziła się z marzenia o przybliżeniu włoskiej duszy i południowego ciepła w samym sercu naszego miasta. Od momentu powstania – niespełna trzy lata temu – naszą misją było stworzenie miejsca, gdzie smak, atmosfera i gościnność łączą się w harmonijną całość.</p>
        <p>Zainspirowani sycylijską tradycją i prostotą domowej kuchni, postanowiliśmy podzielić się tym, co kochamy najbardziej – autentyczną pizzą, pachnącą świeżymi ziołami, dojrzewającymi serami i oliwą z pierwszego tłoczenia. Każdy kawałek to opowieść o słońcu, morzu i miłości do prawdziwego jedzenia.</p>
        <p>Mała Sycylia to nie tylko pizzeria – to zaproszenie do podróży, której nie trzeba planować. Wystarczy wejść, usiąść i pozwolić sobie na chwilę sycylijskiej beztroski.</p>
      </div>

      <div class="grid products">
        <img src="${tables}" alt="Tables">

      </div>
    `;



  return aboutSectionContent;
}


function aboutPage(element) {
  element.innerHTML = '';
  element.innerHTML = aboutSection();

  return element;
}

export default aboutPage;