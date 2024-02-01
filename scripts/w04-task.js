/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Fernando Cuba",
    photo: "images/fernandocubaunalm.jpg",
    favoriteFoods: ['Lomo Saltado','Arroz con leche','Sopa de camarones','Sopa de espinaca'],
    hobbies: ['Paintball','Running','Designing'],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Mexico City, MX',
        length: '3 weeks'
    },

    {
        place: 'Callao',
        length: '2 years'
    },
    {
        place: 'La Molina',
        length: '20 years'
    },
    {
        place: 'Monterrey',
        length: '2 years'
    }
);


/* DOM Manipulation - Output */


/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
 myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
for (let i = 0; i < myProfile.placesLived.length; i++) {
    
    const dt= document.createElement('dt');
    dt.textContent = myProfile.placesLived[i].place;

    
    const dd = document.createElement('dd');
    dd.textContent = myProfile.placesLived[i].length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
};
