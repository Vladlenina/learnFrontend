// Выведите n первых членов последовательности Фибоначчи, где каждый следующий член равен сумме двух предыдущих:

// 1, 1, 2, 3, 5, 8, 13

let n = 7;
let prev1 = 1;
let prev2 = 1;

for (let i = 1; i <= n; i++) {
  if (i < 3) {
    console.log(prev1);
  } else {
    let number = prev1 + prev2;
    console.log(number);
    prev1 = prev2;
    prev2 = number;
  }
}
