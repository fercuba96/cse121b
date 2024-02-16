let slogan = 'Crafting Tomorrow, one fold at a time.';

const sloganElement = document.getElementById('slogan');
const valuesElement = document.getElementById('values');

sloganElement.innerHTML = `<strong>${slogan}</strong>`;

let valuesofcompany = ['Innovation', 'Social Connectivity','Community Empowerment'];

valuesElement.innerHTML = "Are essential for us: " + valuesofcompany.join(', ');

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

const filterProducts = (origamis) => {

    reset();

    const filter = document.querySelector('#filtered').value;

    switch (filter){

        case 'animals': 
           displayOrigamis(origamis.filter(origami => origami.kindofproduct.includes('animals')));
           break;
        case 'pokemons':
            displayOrigamis(origamis.filter(origami => origami.kindofproduct.includes('pokemon')));
            break;
        case 'flowers':
            displayOrigamis(origamis.filter(origami => origami.kindofproduct.includes('flower')));
            break;
        case 'all':
            displayOrigamis(origamis);
            break;
        
        }

};

document.querySelector("#filtered").addEventListener("change", () => { filterProducts(origamiList)});

getOrigamis();
