import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Hello Amira</h1>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>This is a Vite app!</h1>
    <div class="card">
        <div id="userData"></div>
    <div id="favfoods"></div>
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
    </p>
  </div>

  `
  const userData = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28,
    favoriteMeals: [
      "Sushi Roll",
      "Grilled Cheese Sandwich",
      "Beef Tacos"
    ],
    contact: {
      email: "alice@example.com",
      phone: "555-1234"
    }
};

console.log(userData);

const stringifyUserData = JSON.stringify(userData);
console.log(stringifyUserData);

const parseUserDate = JSON.parse(stringifyUserData);
console.log(parseUserDate);

document.getElementById('userData').textContent = `Name: ${userData.firstName} ${userData.lastName}, Age: ${userData.age}, Email: ${userData.contact.email}, Phone: ${userData.contact.phone}`;

const foodDiv = document.getElementById('favfoods');
const ul = document.createElement('ul');

userData.favoriteMeals.forEach(favFoods => {
  const li = document.createElement('li');
  const foodNode = document.createTextNode(favFoods);
  li.appendChild(foodNode);
  ul.appendChild(li);
});

foodDiv.appendChild(ul);


setupCounter(document.querySelector('#counter'))
