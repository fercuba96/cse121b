let slogan = 'Crafting Tomorrow, one fold at a time.';

const sloganElement = document.getElementById('slogan');
const valuesElement = document.getElementById('values');

sloganElement.innerHTML = `<strong>${slogan}</strong>`;

let valuesofcompany = ['Honesty', 'Gratitude'];

valuesElement.innerHTML = "Identity includes: " + valuesofcompany.join(', ');