//Question 1
const prices = [1, 39, 25, 112, 111, 30, 211, 300, 5, 67];
let max = prices[0];

for (let i = 1; i < prices.length; i++) {
  if (max < prices[i]) {
    max = prices[i];
  }
}

console.log(max);

//Question 2

const teams = [
  "Bois mort",
  "Broom broom",
  "Broom broom",
  "Snek",
  "Snek",
  "Merlin FTW",
  "Gandalf FTW",
  "Merlin FTW",
  "Broom broom",
  "Bois mort",
];
const val = "Broom broom"; // La valeur à trouver

for (let i = 0; i < teams.length; i++) {
  if (teams[i] === val) {
    console.log(i);
  }
}
