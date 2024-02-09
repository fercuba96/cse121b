/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('#temples');
let templeList = [];
/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);

    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);

};

/*console.log(templeList);/

/* reset Function */


const reset = () => {

    const templesElement = document.querySelector('#temples');

    templesElement.innerHTML = '';
};

/* filterTemples Function */

/* in the Criterias for grading is placed the following function
named as 'SortBy' but in the instructions is placed as 'filerTemples' function
so I continued coding with function called 'filterTemples' as mentioned
in this template*/
const filterTemples = (temples) => {

    reset();

    const filter = document.querySelector('#filtered').value;

    switch (filter){

        case 'utah': 
           displayTemples(temples.filter(temple => temple.location.includes('Utah')));
           break;
        /* in the instructions is mentioned 'nonutah' but in order to not change the html
        I placed 'notutah' */
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        
        }

};


/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList)});

getTemples();

