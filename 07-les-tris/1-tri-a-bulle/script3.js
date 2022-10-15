// Déclaration des variables
let userInput = [];
let tabString = [];
let tab = [];

// Récupère l'entrée utilisateur et la stocke dans le tableau 'tabString' puis sépare la chaîne de caractère en plusieurs sous-chaînes stockées à différents index du tableau.
function getUserInput() {
    // Récupère la valeur entrée par l'utilisateur et la stocke dans la variable "userInput"
    userInput = document.getElementById('input').value;

    // Pour chaque caractère entré par l'utilisateur
    for (let i = 0; i < userInput.length; i++) {
        // Ajoute le caractère au tableau "tabString".
        tabString.push(userInput[i]);
        // Sépare les valeurs en utilisant les virgules comme repère.
        tabString = userInput.split(',');
    }
    // Appel de la fonction toNumber()
    toNumber();
}

// Transforme les chaînes de caractères en nombres
// Pour chaque élément du tableau "tabString", transforme l'élément String en nombre. Ajoute le nombre au tableau "tab".
function toNumber() {
    tabString.forEach((element) => {
        element = Number(element);
        tab.push(element);
    });
    console.log(tab);
}

// Compare chaque nombre avec le suivant et le déplace vers la droite s'il est plus grand.
function triAbulles() {
    for (let i = 0; i < tab.length - 1; i++) {
        console.log(`Valeur de i : ${i}`);
        for (let j = 0; j < tab.length - 1 - i; j++) {
            console.log(`j: ${tab[j]} est comparé à j+1 : ${tab[j + 1]}`);
            if (tab[j] > tab[j + 1]) {
                console.log(
                    `j: ${tab[j]} est à permuter avec j+1 : ${tab[j + 1]}`
                );
                let temp = tab[j + 1];
                tab[j + 1] = tab[j];
                tab[j] = temp;
            }
        }
    }

    console.log(tab);
}

// Crée un paragraphe et y insère les valeurs du tableau trié
function displaySortedNumbers() {
    let section = document.getElementById('mySection');
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `Voici vos nombres triés : ${tab}`;
    console.log(paragraph);

    section.appendChild(paragraph);
}

// Au click : appels des différentes fonctions
function sortUserInput() {
    getUserInput();
    triAbulles();
    displaySortedNumbers();
}
