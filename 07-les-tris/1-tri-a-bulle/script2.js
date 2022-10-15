//let tab = [13, 17, 9, 3];

let tab;

function triAbulles() {
    let userInput = document.getElementById('input').value;
    //userInput = parseInt(userInput);
    console.log(userInput);

    tab = userInput.split(',');
    console.log(tab);

    for (let i = 0; i < tab.length - 1; i++) {
        console.log(`Valeur de i : ${i}`);
        parseInt([i]); // BUGFIX - La méthode parseInt() ne fonctionne pas ici
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

    // Insertion d'un élément html en manipulant le DOM
    let body = document.body;
    let paragraph = document.createElement('p');
    paragraph.innerHTML = `Voici vos nombres triés : ${tab}`;
    console.log(paragraph);

    body.appendChild(paragraph);
}
