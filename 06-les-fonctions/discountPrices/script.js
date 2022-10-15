// Exemple 1
function getDiscountPrice(price, discountPercentage) {
    let newPrice = price - (price * discountPercentage) / 100;
    console.log(newPrice);
}

getDiscountPrice(20, 10);

// Exemple 2
function getNewDiscountPrice(price, discountPercentage) {
    let newPrice = price - (price * discountPercentage) / 100;
    return newPrice;
}

console.log(getNewDiscountPrice(150, 20));
