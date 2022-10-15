const n = 10;
const fibo = new Array(n);
fibo[0] = 0;
fibo[1] = 1;

for (let i = 2; i < n; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);
