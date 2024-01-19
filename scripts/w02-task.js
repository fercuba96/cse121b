/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Fernando Cuba';
let currentYear = '2024';
let profilePicture = 'images/fernandocubaunalm.jpg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementsByTagName('img')[0];


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
yearElement.textContent = currentYear;
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ["Pure de papa", "Ceviche"];

foodElement.innerHTML = "My favorite foods: " + favoriteFoods.join(', ');

let favoriteFood = 'Tallarines verdes';
favoriteFoods.push(favoriteFood);
foodElement.innerHTML += `<br>${favoriteFood}`;

let favoriteFood1 = 'Lomo Saltado';
favoriteFoods.unshift(favoriteFood1);
foodElement.innerHTML += `<br>${favoriteFood1}`;

let favoriteFood2 = 'Salchipapa';
favoriteFoods.push(favoriteFood2);
foodElement.innerHTML += `<br>${favoriteFood2}`;

