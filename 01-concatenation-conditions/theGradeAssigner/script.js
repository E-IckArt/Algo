function assignGrade(score) {
    score = Number(prompt('Entrez votre score'));
    if (score >= 80) {
        console.log('A');
    } else if (score >= 60 && score < 80) {
        console.log('B');
    } else if (score >= 40 && score < 60) {
        console.log('C');
    } else if (score >= 20 && score < 40) {
        console.log('D');
    } else {
        console.log('F');
    }
}

assignGrade(85);
