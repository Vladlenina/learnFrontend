// Выведете большую и меньшую цифры числа x
// x = 13817

let x = 13817;
let maxDigit = -1;
let minDigit = 9;

for (let i = x; i > 0; i = Math.floor(i / 10)) {
  let digit = i % 10;
  if (digit > maxDigit) {
    maxDigit = digit;
  } else if (digit < minDigit) {
    minDigit = digit;
  }
}
console.log(`Большая цифра ${maxDigit}`);
console.log(`Меньшая цифра ${minDigit}`);
