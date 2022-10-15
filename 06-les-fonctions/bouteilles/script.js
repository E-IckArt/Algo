let note = prompt('Entrez une note');
//Déclaration de la fonction
// Toute variable dans la déclaration de la fonction (entre parenthèses) s'appelle un PARAMETRE
// Si on a pas de return dans une fonction , on l'appelle une PROCEDURE
function jeVerseDansMaBouteille(nbCl, typeBouteille) {
    //console.log("Je verse dans ma bouteille : )
    console.log(
        'Je verse dans ma bouteille ' + nbCl + ' cl de ' + typeBouteille
    );
    console.log('Glouglou...');

    //A la fin d'une exécution, on peut faire en sorte de retourner une valeur.
    return nbCl;
}

let contenuBouteilleCoca = 0;
let text = 'Ma bouteille contient ';
let unity = 'cL';

console.log(text + contenuBouteilleCoca + unity + ' : elle est vide.');

// Appel de la fonction
// Je transmets ici une valeur de 5 à ma fonction
// Toute donnée dans l'appel de la fonction (entre parenthèses) s'appelle un ARGUMENT
contenuBouteilleCoca = jeVerseDansMaBouteille(5, 'Coca Cola');
console.log(text + contenuBouteilleCoca + unity);

// Appel de la fonction
// Je transmets ici une valeur de 15 à ma fonction
contenuBouteilleCoca =
    contenuBouteilleCoca + jeVerseDansMaBouteille(15, 'Coca Cola');
console.log(text + contenuBouteilleCoca + unity);

// Appel de la fonction
// Je transmets ici une valeur de 25 à ma fonction
contenuBouteilleCoca += jeVerseDansMaBouteille(25, 'Coca Cola');
1515;
