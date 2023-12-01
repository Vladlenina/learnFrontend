// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
console.log(operationsWithEvenOdd(2, 4)); // 8
console.log(operationsWithEvenOdd(11, 31)); // 42
console.log(operationsWithEvenOdd(-8, -15)); // -15

function operationsWithEvenOdd(a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    return a * b;
  } else if (a % 2 !== 0 && b % 2 !== 0) {
    return a + b;
  } else if (a % 2 !== 0 && b % 2 === 0) {
    return a;
  } else if (a % 2 === 0 && b % 2 !== 0) {
    return b;
  }
}
