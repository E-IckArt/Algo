/*
On veut écrire un message qui demande une heure et nous écrit un msg.

=> Si c'est entre minuit et 6h: "Bonne nuit"
=> Si c'est entre 6h et 12h : "Passe une bonne matinée"
=> Si c'est entre 12 et 18h : " Bon après-midi"
=> Si c'est entre 18h et minuit: "Bonne soirée"

- PSEUDO CODE -

Variable hour en Nombre
Lire hour

Si hour >=0 ET hour <6
Alors
    Ecrire "Bonne nuit"
Sinon si hour >=6 ET hour <12
Alors
    Ecrire "Passe une bonne matinée"
Sinon si hour >=12 ET hour <18
Alors
    Ecrire "Bon après-midi"
Sinon si hour >=18 ET hour <24
Alors
    Ecrire "Bonne soirée"
Sinon
Alors
    Ecrire "Mer il est fou"
*/

let hour = Number(prompt("Entrer l'heure"));

if (hour >= 0 && hour < 6) {
    console.log('Bonne nuit');
} else if (hour >= 6 && hour < 12) {
    console.log('Bonne matinée');
} else if (hour >= 12 && hour < 18) {
    console.log('Bon après-midi');
} else if (hour >= 18 && hour < 24) {
    console.log('Passe une bonne soirée !');
} else {
    alert('Mer il est fou !');
}
