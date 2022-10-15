/* Ecrire un algorithme qui déclare un tableau de 9 notes, dont on fait ensuite saisir les valeurs par l'utilisateur.
Ecrivez la fin de l'algorithme afin que le calcul de la moyenne des notes soit effectué et affiché à l'écran.
*/

let notes = [];
let sum = 0;
let avg;
let bestNote;

//Pour i=0; répéter jusqu'à i<=8; pas de 1
for (i = 0; i <= 4; i++) {
    notes[i] = Number.parseInt(prompt('Entrez votre note n°' + (i + 1)));
    console.log(notes);

    //sum = sum + notes[i]
    sum += notes[i];
    console.log(sum);
}

// Ecrire les notes
console.log(notes);
// Ecrire la moyenne des notes
avg = sum / notes.length;

console.log('Moyenne : ' + avg);
document.write('Moyenne : ' + avg);

// Trouver la meilleure note de la liste. La stocker dans une variable. Ecrire la variable.
bestNote = Math.max(...notes);
console.log('Meilleure note : ' + bestNote);
