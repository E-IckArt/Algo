// Chercher la position d'une valeur dans une liste non-triée

const temperatures = [12, 5, 29, -3];
const val = 5; // La valeur à trouver

for (let i = 0; i < temperatures.length; i++) {
  if (val === temperatures[i]) {
    // Si val strictement égale à l'une des températures indéxées
    console.log("La valeur se trouve à l'index: " + i);
  }
}

/*JavaScript : chercher le maximum d'une liste de températures. */

const temp = [12, 5, 29, -3];
let max = temp[0];
for (let i = 1; i < temp.length; i++) {
  if (max < temp[i]) {
    max = temp[i];
  }
}

console.log(max);

//La complexité en temps de ces deux algorithmes est O(n) car il est nécessaire de parcourir tous les éléments de la liste pour trouver ce que l'on cherche.

/*La complexité O(n) d'une recherche dans une liste non-triée n'est pas optimale. Sur de grands volumes de données ou en cas de recherches fréquentes, le temps d'exécution ou les performances pourraient ne pas être au rendez-vous. Pour améliorer cela il faut : 
- 1) trier la liste
- 2) utilisation un algorithme de recherche dans une liste triée.

/** JavaScript : Recherche du maximum dans une liste triée. */
const sortedTemperatures = [-3, 5, 12, 29];
const maximum = sortedTemperatures[sortedTemperatures.length - 1];

console.log(max);

/** JavaScript : Recherche naïve dans une liste triée. */
const sortedTemps = [-3, 5, 12, 50, 50, 78, 94, 113, 129];
const value = 50;
let i = 0;

while (i < sortedTemps.length && sortedTemps[i] <= value) {
  if (sortedTemps[i] === value) {
    console.log(i);
  }
  i = i + 1;
}
console.log("Fin");

/** JavaScript : Dichotomie. */
const sortedTemperatures = [-3, 5, 12, 50, 78, 94, 113, 129];
const searchedVal = 12;

let a = 0;
let b = sortedTemperatures.length - 1;
while (a <= b) {
  const m = Math.floor((a + b) / 2);
  if (sortedTemperatures[m] === searchedVal) {
    // on a trouvé v
    console.log(m);
    break;
  } else if (sortedTemperatures[m] < searchedVal) {
    a = m + 1;
  } else {
    b = m - 1;
  }
}

//La complexité en temps de la dichotomie est O(log(n)). Cette complexité est bien meilleure que O(n) notamment pour des très grandes listes.

/** JavaScript : Produit cartésien pour obtenir les menus possibles. */
const vegetables = ["Frites", "Riz", "Coquillettes"];
const sauces = ["Pesto", "Ketchup"];

for (let i = 0; i < vegetables.length; i++) {
  for (let j = 0; j < sauces.length; j++) {
    console.log(vegetables[i], sauces[j]);
  }
}

/** JavaScript : Suite de Fibonacci. */
const n = Number.parseInt(prompt("Entrer un entier supérieur à 1:")); // Par exemple, 4

const fibo = new Array(n);
fibo[0] = 0;
fibo[1] = 1;

for (let i = 2; i < n; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);

/*La complexité en temps de cet algorithme est O(n).
On peut voir très clairement ce qui explique cette complexité
car on voit deux boucles simples.
On pourrait être plus précis en disant O(2 * n) mais cette complexité est
considérée comme équivalente à O(n) car on souhaite simplement un ordre de grandeur.*/

/** JavaScript : tri à bulles d'une liste d'âges. */
const ages = [17, 1, 28, 5];

for (let i = ages.length - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (ages[j + 1] < ages[j]) {
      // Echanger les deux valeurs
      let temp = ages[j + 1];
      ages[j + 1] = ages[j];
      ages[j] = temp;
    }
  }
}

console.log(ages);

// Tri à bulles - SANS VARIABLE TEMPORAIRE - S'utilise uniquement avec des nombres.

let numbers = [3, 8, 5, 9, 1];
let numbersLength = numbers.length;

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

/*La complexité en temps de ce tri est O(n²).
On peut voir très clairement ce qui explique cette complexité grâce à la boucle imbriquée.
Il ne fait pas partie des tris les plus rapides tel que le tri fusion qui est en O(n*log(n)). */

/* ATTENTION !!!
Dans un vrai programme il ne faut JAMAIS implémenter un tri soi-même mais utiliser les fonctions de tri déjà implémentées.
Elles sont optimisées pour utiliser le tri optimal selon la liste fournie. */

//Exemple de fonction de tri :

const ages = [18, 6, 82];
let sorted = ages.sort(function (a, b) {
  return a - b;
});
console.log(sorted);

ages = [18, 6, 82];
ages.sort();

/*Algorithme : Le Crible d'Eratothène.
Cet algorithme permet de trouver tous les nombres premiers inférieurs à un certain nombre.

Pseudo-code :

limite = ?
L = liste des entiers de 2 à limite
primeNumbers = []

Tant que L est non vide faire:
  Ajouter L[0] à nbPremiers
  i prend la valeur 1
  Tant que i < longueur(L) faire:
    Si L[i] est multiple de L[0]:
      Enlever L[i] de L
    Sinon:
      Incrémenter i
    FinSi
  FinTantQue
  Retirer le premier élément de L
FinTantQue

Afficher nbPremiers

*/

const limit = Number(prompt("Entrer la limite du crible"));
const L = [];
for (let i = 2; i <= limit; i++) {
  L.push(i);
}
const primeNumbers = [];

while (L.length > 0) {
  primeNumbers.push(L[0]);
  let i = 1;
  while (i < L.length) {
    if (L[i] % L[0] === 0) {
      L.splice(i, 1);
    } else {
      i++;
    }
  }
  L.splice(0, 1);
}

console.log(primeNumbers);
