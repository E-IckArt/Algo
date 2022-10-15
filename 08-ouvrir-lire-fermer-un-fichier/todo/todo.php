<?php

// Ouvrir le fichier "todo.txt" sur f en Lecture
$f = fopen("todo.txt", "r");

// Tant que Non eof(f)
while (!feof($f)) {
    // LireLigneActuelle(f, Text)
    $currentLine = fgets($f);
    // Ecrire Text
    echo $currentLine;
}

// Fermer le fichier
fclose($f);
