<?php

# Variable tab[] en Entier -->
$tab = [2, 9, 12, 8];

# Variable elementActuel en Entier
$eActuel;
# Variable i, j en Entier


# Pour i de 1 à longueur du tableau -1
for ($i = 1; $i < count($tab); $i++) {
    # elementActuel = tab[i]
    $eActuel = $tab[$i];
    # j = i
    $j = $i;
    # Tant que tab[j-1] > elementActuel ET j>0:
    while ($tab[$j - 1] > $eActuel && $j > 0) {
        # tab[j] = tab[j-1]
        $tab[$j] = $tab[$j - 1];
        # j = j-1
        $j -= 1;
    }
    # tab[j] = elementActuel
    $tab[$j] = $eActuel;
    # i suivant    
}
# Fin pour
print_r($tab);
