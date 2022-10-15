/*Ecrire un algorithme qui demande un nombre de départ et affiche ensuite les 10 nombres suivants.
Ex: si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.
*/

//Variable nb, i en Entier
let nb;
//Lire nb
nb = Number.parseInt(prompt('Entrez un nombre'));

//Pour i = nb+1; faire si i<= nb+10; pas de 1
for (let i = nb + 1; i <= nb + 10; i++) {
    //Ecrire i
    console.log(i);
}

//i suivant
