const factorielle = (nb) => {
    let total = 1;
    for (let i = nb; i >= 1; i--) {
        total = total * i;
    }
    return total;
};

console.log(factorielle(5));

const recursiveFactorielle = (nb) => {
    if (nb > 1) {
        return nb * recursiveFactorielle(nb - 1);
    } else {
        return 1;
    }
};

console.log(recursiveFactorielle(5));
