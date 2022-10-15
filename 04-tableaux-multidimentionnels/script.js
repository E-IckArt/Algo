let grosCarton = [
    ['chaussettes 1', 'chaussettes 2'],
    [
        ["pull d'été 1", "pull d'été 2"],
        ["pull d'hiver 1", "pull d'hiver 2"],
    ],
    ['slip 1'],
    ['pantalon 1', 'pantalon 2', 'pantalon 3', 'pantalon 4'],
];

console.log(grosCarton);

// Afficher sous forme de tableau
console.table(grosCarton);

// Séparation
console.log('');

console.log('Boucles for imbriquées');
//Boucle for pour afficher chaque élément séparément
for (let i = 0; i < grosCarton.length; i++) {
    for (let j = 0; j < grosCarton[i].length; j++) {
        if (Array.isArray(grosCarton[i][j])) {
            for (let k = 0; k < grosCarton[i][j].length; k++) {
                console.log(grosCarton[i][j][k]);
            }
        } else {
            console.log(grosCarton[i][j]);
        }
    }
}

// Séparation
console.log('');

// ATTENTION : Les boucles for sur des tableaux multidimentionnels consomment beaucoup de ressources : plus il y a de données imbriquées plus le programme sera lent.

console.log('Boucles forEach imbriquées contenues dans une arrow function');

// Boucles forEach et fonction anonyme fléchée
const displayEachClothes = () => {
    return grosCarton.forEach(function (compartiment) {
        compartiment.forEach(function (petiteBoite) {
            if (Array.isArray(petiteBoite)) {
                petiteBoite.forEach(function (miniBoite) {
                    console.log(miniBoite);
                });
            } else {
                console.log(petiteBoite);
            }
        });
    });
};

// Affichage de la variable displayEachClothes
console.log(displayEachClothes());

// Séparation
console.log('');

// Ajouter des éléments
grosCarton[grosCarton.length] = ['maillot 1', 'maillot 2'];
grosCarton.push(['cravate 1', 'cravate 2']);

console.log(displayEachClothes());
