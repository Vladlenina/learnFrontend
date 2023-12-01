// Написать функцию, принимающую массив чисел. Она должна возвращать true, если в массиве все числа двузначные, иначе false.
const arr = [18, 95, 36, 37, 42];
const arr2 = [9, 6, 76, 3, 32];

function every(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10 || arr[i] > 99) {
      return false;
    }
  }
  return true;
}

console.log(every(arr)); // true
console.log(every(arr2)); // false
