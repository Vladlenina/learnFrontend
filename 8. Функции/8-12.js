// Написать функцию, принимающую массив чисел. Она должна возвращать новый массив, который будет зеркальным отражение переданного массива.
const arr = [1, 2, 3, 4, 5, 6];

function toReversed(arr) {
  let array = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    array.push(arr[i]);
  }
  return array;
}

const reversedArr = toReversed(arr);

console.log(reversedArr); // [6, 5, 4, 3, 2, 1]
