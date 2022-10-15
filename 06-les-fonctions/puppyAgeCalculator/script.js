// Write a function named calculateDogAge that: takes 1 argument: your puppy's age.
function calculateDogAge(puppyAge) {
    // calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
    let dogAge = puppyAge * 7;
    // outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
    console.log('Your doggie is ' + dogAge + ' years old in human years !');
}
//Call the function three times with different sets of values.
calculateDogAge(3);
calculateDogAge(5);
calculateDogAge(15);
//Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
