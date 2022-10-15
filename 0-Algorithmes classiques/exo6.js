// Avec tri à bulles + variable temporaire
const scores = [58, 13, 29, 100, 203, 1, 5, 13, 56, 33, 123];

for (let i = scores.length - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (scores[j + 1] < scores[j]) {
      let tempo = scores[j + 1];
      scores[j + 1] = scores[j];
      scores[j] = tempo;
    }
  }
}

console.log(scores);

// Avec tri à bulles, sans variable temporaire

const scores1 = [58, 13, 29, 100, 203, 1, 5, 13, 56, 33, 123];

for (let i = scores1.length - 1; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    if (scores1[j + 1] < scores1[j]) {
      scores1[j] = scores1[j] + scores1[j + 1];
      scores1[j + 1] = scores1[j] - scores1[j + 1];
      scores1[j] = scores1[j] - scores1[j + 1];
    }
  }
}

console.log("scores1 : " + scores1);

//Avec la fonction sort()
let scorePlayer1 = [20, 53, 26, 15, 60, 58, 40, 48, 35];

let sorted = scorePlayer1.sort();

console.log(sorted);
