// Написать функцию, принимающую массив чисел. Она должна возвращать сумму всех элементов.

console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([-5, -10, 15])); // 0

function sum(array) {
  let sumArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
  }
  return sumArray;
}
