/* Pseudo-code

Variable tab[] en Entier
Variable elementActuel en Entier
Variable i, j en Entier

Pour i de 1 à longueur du tableau -1
    elementActuel = tab[i]
    j = i

    Tant que tab[j-1] > elementActuel ET j>0:
        tab[j] = tab[j-1]
        j = j-1
    tab[j] = elementActuel

i suivant    
Fin pour
*/

let tab = [2, 9, 12, 8];

for (let i = 1; i < tab.length; i++) {
    elementActuel = tab[i];
    let j = i;

    while (tab[j - 1] > elementActuel && j > 0) {
        tab[j] = tab[j - 1];
        j = j - 1;
    }
    tab[j] = elementActuel;
}

console.table(tab);
