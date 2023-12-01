//Дан массив a. Поменяйте местами его минимальный и максимальный элементы и выведете на экран.

let a = [7, 2, 3, 0];

let min = 9;
let max = -1;
let indexMax = 0;
let indexMin = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
    indexMax = a.indexOf(max);
  }
  if (a[i] < min) {
    min = a[i];
    indexMin = a.indexOf(min);
  }
}
a[indexMax] = min;
a[indexMin] = max;
console.log(a);

// let max = Math.max(...a);
// let min = Math.min(...a);

// let indexMax = a.indexOf(max)
// let indexMin = a.indexOf(min)

// a[indexMax] = min
// a[indexMin] = max

// console.log(a)
