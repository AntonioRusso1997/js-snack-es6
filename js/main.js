/* Snack 1:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera. */

// Creo array di oggetti
let bikes = [
    {
        name: "Canyon Ultimate",
        weight: 6.7
    },
    {
        name: "Rose X-Lite",
        weight: 6.9
    },
    {
        name: "Sarto asola",
        weight: 5.7
    },
    {
        name: "Wilier Triestina Zero",
        weight: 6.1
    }    
];

//Stampo a schermo la bici con il peso minore
let lowerWeight = bikes[0];

for (let i = 0; i < bikes.length; i++) {

    if (bikes[i].weight < lowerWeight.weight) {
        lowerWeight = bikes[i];
    }
};

console.log(lowerWeight);

/* --------------------------------------------------*/

/* Snack 2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/
