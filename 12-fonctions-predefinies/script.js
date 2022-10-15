/* FONCTIONS DE TEXTE IMPORTANTES */

/* Exercice 1 - utiliser .length, .substring() .search() et .indexOf() */
let firstname = 'Arnold-Jacques';

// .lenght - Trouver la longueur d'une chaîne de caractères
let firstnameLength = firstname.length;
console.log(`Mon prénom fait ${firstnameLength} caractères`);

// .substring() - Récupérer une partie d'une chaîne de caractère
first3LetersFirstname = firstname.substring(0, 3);
console.log(first3LetersFirstname);

// .search() et .indexOf() - Chercher des caractères dans une chaine de caractères ET indiquer à quel index ils se trouvent.
searchedTerm = 'ques';
xInFirstname = firstname.search(searchedTerm);
positionXInFirstname = firstname.indexOf(searchedTerm);

if (!xInFirstname) {
    console.log('aucun résultat');
} else {
    console.log(
        `"${searchedTerm}" trouvé à la position : ${positionXInFirstname}`
    );
}

console.log('<------------------------->');

/* FONCTIONS NUMERIQUES IMPORTANTES */

/* Exercice 2 - Récupérer la partie entière d'un nombre, arrondir un nombre, générer un nombre de manière aléatoire. */

// Tirer un nombre à virgule aléatoire entre 1 et 3
// Variable en Entier min = 1;
const min = 1;
// Variable en Entier max = 3;
const max = 3;

// Variable nb = Aléatoire(min, max)
const nb = Math.random() * (max - min) + min;
//Ecrire nb
console.log(nb);

// Afficher 3 nombres après la virgule
// Variable nb3Digits = Arrondir(nb, 3)
nb3Digits = nb.toFixed(3);
// Ecrire nb3Digits
console.log(nb3Digits);

// Récupérer la partie entière de ce nombre
// Variable nbInt = entier(nb)
nbInt = parseInt(nb);
console.log(nbInt);
// Ecrire nbInt
