// Дано n. Из первых n натуральных чисел выведете только чётные.
let n = 10;
let str = '';

for (i = 0; i < n; i++) {
  if (i % 2 === 0) {
    str += ' ' + i;
  }
}
console.log(str);
