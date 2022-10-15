// Exercice 2

/*
let lang = prompt("Entrez votre language");
let fr = "Kikou les gens";
let ang = "Hi buddy !";
let es = "Hola !";
let notFound = "Language not found";

if (lang == "fr") {
  console.log(fr);
  document.write(fr);
} else if (lang == "ang") {
  console.log(ang);
  document.write(ang);
} else if (lang == "es") {
  console.log(es);
  document.write(es);
} else {
  console.log(notFound);
  document.write(notFound);
}
*/

// Exercice 2.2 - Avec création d'une fonction)

let lang = prompt('Entrez votre language');

let fr = 'Kikou les gens !';
let ang = 'Hi buddy !';
let es = 'Hola !';
let notFound = 'Sorry, language not found';

function helloWorld(lang) {
    if (lang == 'fr') {
        console.log(fr);
        document.write(fr);
    } else if (lang == 'ang') {
        console.log(ang);
        document.write(ang);
    } else if (lang == 'es') {
        console.log(es);
        document.write(es);
    } else {
        console.log(notFound);
        document.write(notFound);
    }
}

helloWorld(lang);
