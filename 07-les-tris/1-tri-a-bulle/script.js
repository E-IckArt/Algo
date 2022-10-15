let tab = [13, 17, 9, 3];
console.log(tab);

function triAbulles() {
    for (let i = 0; i < tab.length - 1; i++) {
        console.log(`Valeur de i : ${i}`);
        for (let j = 0; j < tab.length - 1 - i; j++) {
            console.log(`j: ${tab[j]} est comparé à j+1 : ${tab[j + 1]}`);
            if (tab[j] > tab[j + 1]) {
                console.log(
                    `j: ${tab[j]} est à permuter avec j+1 : ${tab[j + 1]}`
                );
                let temp = tab[j + 1];
                tab[j + 1] = tab[j];
                tab[j] = temp;
            }
        }
    }

    console.log(tab);
}

triAbulles();
