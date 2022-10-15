let somme;
let billet50 = 0;
let billet20 = 0;
let billet10 = 0;
let billet5 = 0;

somme = Number.parseInt(prompt('Entrez une somme'));

while (somme >= 5) {
    if (somme >= 50) {
        somme -= 50;
        billet50 += 1;
    } else if (somme >= 20) {
        somme -= 20;
        billet20 += 1;
    } else if (somme >= 10) {
        somme -= 10;
        billet10 += 1;
    } else {
        somme -= 5;
        billet5 += 1;
    }
}
console.log('Somme restante = ' + somme + '€.');
console.log('Billets de 50€ : ' + billet50);
console.log('Billets de 20€ : ' + billet20);
console.log('Billets de 10€ : ' + billet10);
console.log('Billets de 5€ : ' + billet5);
