const sortedPerf = [0, 6, 7, 16, 25, 30, 32, 38, 46, 46, 59, 70, 87, 93, 111];
const val = 46;
let i = 0;

while (i < sortedPerf.lengh && sortedPerf[i] <= val) {
  if (sortedPerf[i] === val) {
    console.log(i);
  }
  i += 1;
}
console.log("Fin du programme");
