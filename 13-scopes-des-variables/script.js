// Variables globales & fonctions

let cityEmission;

function appelVers(destination) {
    return `Je téléphone depuis ${cityEmission} vers ${destination}`;
}

function raccrocher() {
    console.log(`${cityEmission} a raccroché`);
}

cityEmission = 'Nice';
console.log(appelVers('Lyon'));
raccrocher();

/** LOCAL SCOPE, BLOC SCOPE & FUNCTIONS

Une variable déclarée dans une fonction est une variable locale.
Elle est crée à l'entrée dans la fonction et détruite automatiquement à sa sortie.

Une fois hors de la fonction, on ne peut ni l'utiliser, ni l'appeler : cela déclenche une erreur.
*/

function envoyerSMS() {
    let msg = 'Coucou, comment vas-tu ?';
    console.log(`J'envoie un SMS depuis ${cityEmission} : ${msg}`);
}

envoyerSMS();
console.log(msg); // Erreur : ReferenceError: msg is not defined

let msg = 'Coucou'; // Si on déclare une nouvelle variable message le msg sera différent ce celui utilisé dans la fonction.
console.log(msg); // TODO - EFFACER LE CONSOLE.LOG ligne 31 pour voir le résultat.

/** CHOIX DU TYPE DE VARIABLE

Le choix de la variable globale, locale ou de bloc se fait toujours dans l'objectif d'économiser la mémoire vive.
Les variables globales utilisent beaucoup de RAM puisqu'elle vivent to

On utilise pas var car même créée dans une fonction ou un bloc, elle existe encore en dehors. Cela cause des fuites de mémoire.

*/
