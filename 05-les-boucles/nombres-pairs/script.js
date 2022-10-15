/* Ecrire un algorithme qui affiche les nombres pairs de 0 à un nombre demandé.
Exemple:
3 -> 0 2
4 -> 0 2 4
12 -> 0 2 4 6 8 10 12
*/

// Variable nb en Entier
// Lire nb

// Pour i = 0; Faire si i <= nb; pas de 2
//Ecrire i
// i suivant (on repassse dans la boucle avec le i suivant : correspond à l'accolade fermante)

let nb;
nb = Number.parseInt(prompt('Entrez un nombre entier : '));

for (let i = 0; i <= nb; i += 2) {
    console.log(i);
}
