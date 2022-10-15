// Fonction qui retrouve les nombres pairs et les additionne
function getEven(nums) {
    let sum = 0;
    let count = 0;
    let evenNumbers = [];

    //Pour i de 0 à taille de mon tableau nums, pas de 1
    for (i = 0; i < nums.length; i++) {
        // Afficher nums[i]
        console.log(nums[i]);

        //Si nums[i] % 2 == 0 # SI MON NOMBRE EST PAIR
        if (nums[i] % 2 == 0) {
            // j'augmente la somme des nombres pairs de la valeur de mon nombre
            sum += nums[i];
            // j'augmente mon compteur de nombre pairs
            count += 1;
            // je récupère la valeur dans mon tableau des nombres pairs
            evenNumbers.push(nums[i]);
        }
    }

    return [sum, count, evenNumbers];
}

// Tableau de nombres en Entier
let numbers = [25, 16, 12, 15, 28, 14, 6, 13, 89, 55];

let sumandcount = getEven(numbers);
// Afficher le contenu de  la variable sumandcount [sum, count, [evenNumbers]]
console.log(sumandcount);

console.log('Somme des nombres pairs :' + sumandcount[0]);
console.log('Total des nombres pairs : ' + sumandcount[1]);
console.log('Tableau des nombres pairs : ' + sumandcount[2]);
