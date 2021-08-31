/* Snack 1:
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera. */

console.log("---- PRIMO SNACK ----");
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
console.log("---- SECONDO SNACK ----");
/* --------------------------------------------------*/

/* Snack 2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

// Creo array squadre
const teams = [
    {
        nome : "Juventus",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Napoli",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Inter",
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : "Milan",
        puntiFatti : 0,
        falliSubiti : 0
    }
];

//Richiamo funzione per generare numeri casuali al posto degli 0.
rndNumber();
console.log("Array base:");
console.log(teams);

//Creo nuovo array usando la destrutturazione
let teamsArray = [];

for (let i in teams) {
    let {nome, falliSubiti} = teams[i];
    teamsArray.push(
        {
            nome, falliSubiti
        }
    )
}

//Stampo a schermo il nuovo array contentente solo nome e falli subiti
console.log("Array nuovo:");
console.log(teamsArray);

/* --- Funzioni --- */
function rndNumber () {
    for(let i in teams) {
        teams[i].puntiFatti = Math.floor(Math.random()*100)+1;
        teams[i].falliSubiti = Math.floor(Math.random()*40)+1;
    }
}