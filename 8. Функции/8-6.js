// Написать функцию, принимающую массив чисел. Она должна возвращать элемент с минимальным значением.

function min(array) {
  let minNumber = +Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
}

console.log(min([1, 42, 34, 12]));
console.log(min([-5, -10, -100]));

// function min(array) {
//   let minNumber = Math.min(...array);
//   return minNumber;
// }
// console.log(min([1, 42, 34, 12])); // 1
// console.log(min([-5, -10, -100])); // -100
