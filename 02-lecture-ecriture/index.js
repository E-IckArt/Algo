// Le javaScript est un langage à typage dynamique
// On n'a pas besoin de préciser le type de données qu'il y aura dans la variable

let a, b;

a = 5;
b = 2;
a = b;
b = a;
console.log(a); // Ecriture de a
console.log(b); //Ecriture de b

/*Méthode de base pour demander une entrée à un utilisateur :
    -utilisation de prompt (design à l'ancienne, n'est plus utilisé)
 
    Le DOM (avec champ de formulaire) est la nouvelle méthode utilisée */

//Demander la valeur à mettre dans a à l'utilisateur = lire a (en pseudo-code)
a = prompt('Entrez la valeur de a');
//Demander la valeur à mettre dans b à l'utilisateur = lire b (en pseudo-code)
b = prompt('Entrez la valeur de b');
a = b;
b = a;

console.log('Voilà la valeur de a: ' + a);
console.log('Voilà la valeur de b: ' + b);

//Lorsque l'on demande une donnée à l'utilisateur, cela s'appelle une lecture
