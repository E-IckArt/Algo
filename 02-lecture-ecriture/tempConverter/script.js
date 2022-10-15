///Demander une température en celsius à l'utilisateur
let inputCelsius, outputFahrenheit;

//Ecrire "Entrez une température en °C"
//inputCelsius = prompt("Entrez une température en °C");
//Prompt renvoie toujours l'entrée de l'utilisateur sous forme de chaine de caractères
console.log(inputCelsius);
console.log(typeof inputCelsius);

//il faut utilisateur la fonction "number"
inputCelsius = Number(prompt('Entrez une température en °C'));
//Lire inputCelsius
outputFahrenheit = (inputCelsius * 9) / 5 + 32;
//Afficher la conversion en outputFahrenheit dans une boîte d'alerte
alert(inputCelsius + '°C font ' + outputFahrenheit + ' °F.');
