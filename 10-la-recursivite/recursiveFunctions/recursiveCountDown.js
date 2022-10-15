function recursive_countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = recursive_countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

recursive_countdown(5);

console.log(recursive_countdown(5));
