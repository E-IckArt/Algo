<?php

// Ouvrir le fichier "todo.txt" sur f en Lecture
$f = fopen("people.csv", "r");
$people = [];

// Tant que Non eof(f)
while (!feof($f)) {
    // LireLigneActuelle(f, Text)
    $currentLine = fgets($f);
    // Mettre cette ligne dans un tableau
    $explodedCurrentLine  = explode(';', $currentLine);

    $people[] = $currentLine;
}

print_r($people);
// Fermer le fichier
fclose($f);
