///Дан массив a. Найдите количество положительных элементов массива.
let a = [-2, 10, -5, -1, 2, 6];
count = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] > 0) {
    count++;
  }
}
console.log(`count = ${count}`);
