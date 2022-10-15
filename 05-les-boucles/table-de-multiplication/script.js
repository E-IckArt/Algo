/*
Ecrire un algorithme qui demande un nombre de départ, et qui écrit ensuite la table de multiplication de ce nombre.
*/

// Variable nb en Entier
// Lire nb

// Pour i=1; Faire si i <=10; pas de 1
// Ecrire nb + "x" + i +  "=" + nb*i
// i suivant

let nb = Number.parseInt(prompt('Entrez un nombre : '));

console.log('Table de ' + nb);
for (i = 1; i <= 10; i++) {
    console.log(nb + ' x ' + i + ' = ' + nb * i);
}
