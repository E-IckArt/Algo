// Exercice 1
/*
let A, B;

A = Number(prompt("Entrer un nombre A :"));
B = Number(prompt("Entrer un nombre B :"));

if (A > B) {
    console.log("The greater number of " + A + " and " + B + " is " + A);
    document.write("The greater number of " + A + " and " + B + " is " + A);
} else if (A == B) {
    console.log("This two numbers are equals");
    document.write("This two numbers are equals");
} else {
    console.log("The greater number is " + B);
    document.write("The greater number is " + B);
}
*/

//Exercice 1.2 - Avec création d'une fonction

let A = Number(prompt('Entrer un nombre A :'));
let B = Number(prompt('Entrer un nombre B :'));

function greaterNum(A, B) {
    if (A > B) {
        console.log('The greater number of ' + A + ' and ' + B + ' is ' + A);
        document.write('The greater number of ' + A + ' and ' + B + ' is ' + A);
        return A;
    } else if (A == B) {
        console.log('This two numbers are equals');
        document.write('This two numbers are equals');
        return 'This two numbers are equals';
    } else {
        console.log('The greater number is ' + B);
        document.write('The greater number is ' + B);
        return B;
    }
}

greaterNum(A, B);
