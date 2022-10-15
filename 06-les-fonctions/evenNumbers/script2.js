function getEven(nums) {
    let evenNumbers = [];
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            evenNumbers.push(nums[i]);
        }
    }
    return evenNumbers;
}

let numsList = [25, 16, 12, 15, 28, 14, 6, 13, 89, 55];
console.log("Voici la liste d'origine : ");
console.log(numsList);

let final = getEven(numsList);
console.log('Les nombres pairs contenus dans ce tableau sont : ' + final);
