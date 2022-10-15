function plurilize(noun, number) {
    noun = prompt('Entrez un nom');
    number = Number(prompt('Entrez un nombre'));

    if (
        number != 1 &&
        noun != 'sheep' &&
        noun != 'geese' &&
        noun != 'souris' &&
        noun != 'fish' &&
        noun != 'deer'
    ) {
        console.log(number + ' ' + noun + 's');
    } else {
        console.log(number + ' ' + noun);
    }
}

plurilize();
