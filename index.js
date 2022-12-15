// Import stylesheets
import './style.css';

/**
 * Topic: .map()
 * Our restaurant menu currently only shows the breakfast menu, as it has been hard coded into the HTML file.  However, we want to offer a dinner menu intead.  Let's fix this using .map().
 *
 * 1. First, fetch a reference to the menu <section> from the DOM.
 * 2. Set the innerHTML content of the menu <section> to...
 * 3. ...the dinnerFoods array by mapping over the array and returning the following div for each food in the array:
 * `<div class="food">FOOD VALUE HERE</div>`
 * 4. Remember to remove any separating commas between the food divs!
 */
const dinnerFoods = ['🍝', '🍔', '🌮'];

// 1.
const menu = document.getElementById('menu');

console.log(menu.innerHTML);
// 3.
const dinnerMenu = dinnerFoods.map((m) => {
  return `<div class='food'>` + m + `</div>`;
});

// 2.
menu.innerHTML = dinnerMenu;

// 4.
menu.innerHTML = menu.innerHTML.replaceAll(',', '');
// console.log(JSON.stringify(dinnerMenu));
console.log(menu.innerHTML.replaceAll(',', ' '));
