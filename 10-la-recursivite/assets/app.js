function countdown(nb) {
  for (let i = nb; i >= 0; i--) {
    console.log(i);
  }
}

countdown(10);

function recursiveCountdown(nb) {
  if (nb >= 0) {
    console.log(nb);
    recursiveCountdown(nb - 1);
  } else {
    return;
  }
}

recursiveCountdown(15);
