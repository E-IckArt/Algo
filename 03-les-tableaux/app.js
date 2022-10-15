// JavaScript source code
let note;

for (let i = 1; i < 4; i++) {
    note = prompt('Entrez une note'); //A chaque nouvelle entrée la note précédente est écrasée
    console.log(note);
}
console.log(note);

// Tu veux stocker une dizaine de notes
// Mais avec l'objectif de retrouver à tout moment chaque note

let notes = [12, 14.5, 17, 9, 7.5, 8, 12, 6, 20];
console.log(notes[4]);

let hello1 = [];
hello1 = ['Bienvenue'];
hello1 = ['Tout le monde'];

let hello2 = ['Bienvenue', 'Tout le monde', '!'];
console.log(hello2);
console.table(hello2); //Afiche en tableau dans la console (avec les index).

//Pour parcourir le tableau on utilise une boucle : on affiche les éléments du tableau 1 par 1.

for (let i = 0; i < 3; i++) {
    console.log(hello2[i]);
}

//Mais si on ajoute des éléments au tableau seuls les 3 premiers seront affichés.
//On peut donc utiliser varname.length
let hello3 = ['Le', '5eme', 'Element', 'Lilou Dallas', 'Multipass'];

for (let i = 0; i < hello3.length; i++) {
    console.log(hello3[i]);
}

for (note of notes) {
    console.log(note); // Imprime chaque note de la liste une par une.
}

// Exemple de tableaux imbriqués
let multi = [
    [12, 57], // Indice = 0
    ['truc', 'muche'], // Indice = 1
];
console.log(multi[0]); // Imprime [12,57]
console.log(multi[1]); // Imprime ['truc', 'muche']
console.log(multi[1][0]); //Imprime seulement "truc"
