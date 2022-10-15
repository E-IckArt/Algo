/*Ecrire un algorithme qui déclare et remplise un tableau de 7 valeurs numériques en les mettant toutes à zéro.
 */

// Tableau values en Numérique

let values = [];

// Pour i = 0; Répéter tant que i<=6; pas de 1
for (i = 0; i <= 6; i++) {
    // values [i] = 0
    values[i] = 0;
}

console.log(values);

/*Ecrire un algorithme qui, à partir du tableau précédent, affiche ses valeurs une à une (= parcours le tableau)
 */

for (i = 0; i <= 6; i++) {
    // values [i] = 0
    console.log(values[i]);
}
