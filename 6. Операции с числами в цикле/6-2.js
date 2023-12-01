// Выведите первые члены последовательности Фибоначчи, которые не превышают числа x:
// x = 22
// 1, 1, 2, 3, 5, 8, 13, 21

let x = 22;
let prev1 = 1;
let prev2 = 1;

for (let i = 1; i <= x; i++) {
  if (i < 3) {
    console.log(prev1);
  } else if (prev2 + prev1 < x) {
    let number = prev1 + prev2;
    console.log(number);
    prev1 = prev2;
    prev2 = number;
  }
}
