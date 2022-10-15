//Compter le nombre de lettres dans un mot

let word = "Coucou";
let i = 0;

while (word[i]) {
  i += 1;
}

console.log('Le mot "' + word + '" contient ' + i + "  lettres");

document.write('Le mot "' + word + '" contient ' + i + "  lettres");

// Compter le nombre d'occurence d'une lettre dans un mmot

let firstname = "Jérémy";
let compt = 0;
let letter;

for (letter of firstname) {
  if (letter == "é") {
    compt += 1;
  }
}
console.log("Il y a " + compt + ' "é" dans ' + firstname);

// Tri à bulles

let numbers = [3, 8, 5, 9, 1];
let numbersLength = numbers.length;

console.log(numbers); // TODO - A effacer. Cette instruction permet d'afficher la liste avant le tri.
for (let main = 0; main < numbersLength - 1; main++) {
  for (let cell = 0; cell < numbersLength - main - 1; cell++) {
    if (numbers[cell] > numbers[cell + 1]) {
      // Si la valeur de la case actuelle est supérieure à la valeur de la case d'après, on permute les valeurs (en utilisant l'échange de variables précédement vu)
      numbers[cell] = numbers[cell] + numbers[cell + 1];
      numbers[cell + 1] = numbers[cell] - numbers[cell + 1];
      numbers[cell] = numbers[cell] - numbers[cell + 1];
    }
  }
}
console.log(numbers);
