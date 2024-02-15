let slogan = 'Crafting Tomorrow, one fold at a time.';

const sloganElement = document.getElementById('slogan');
const valuesElement = document.getElementById('values');

sloganElement.innerHTML = `<strong>${slogan}</strong>`;

let valuesofcompany = ['Honesty', 'Gratitude'];

valuesElement.innerHTML = "Identity includes: " + valuesofcompany.join(', ');

const origamiElement = document.querySelector('#origami');
let origamiList = [];

const displayOrigamis = (origamis) => {
    origamis.forEach(origami => {
        
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = origami.productName;

        const img = document.createElement('img');
        img.src = origami.imageUrl;
        img.alt = origami.kindofproduct;

        article.appendChild(h3);
        article.appendChild(img);

       origamiElement.appendChild(article);

    });
};


const getOrigamis = async () => {
    const response = await fetch("https://fercuba96.github.io/cse121b/origami.json");
    
    const data = await response.json();
    origamiList = data;
    displayOrigamis(origamiList);

};




const reset = () => {

    const origamiElement = document.querySelector('#origami');

    origamiElement.innerHTML = '';
};

/* filterTemples Function */

/* in the Criterias for grading is placed the following function
named as 'SortBy' but in the instructions is placed as 'filerTemples' function
so I continued coding with function called 'filterTemples' as mentioned
in this template*/
const filterProducts = (origamis) => {

    reset();

    const filter = document.querySelector('#filtered').value;

    switch (filter){

        case 'animals': 
           displayTemples(origamis.filter(origami => origami.kindofproduct.includes('animals')));
           break;
        case 'pokemons':
            displayTemples(origamis.filter(origami => origami.kindofproduct.includes('pokemons')));
            break;
        case 'flowers':
            displayTemples(origamis.filter(origami => origami.kindofproduct.includes('flowers')));
        case 'all':
            displayTemples(origamis);
            break;
        
        }

};

document.querySelector("#filtered").addEventListener("change", () => { filterProducts(origamiList)});

getOrigamis();
