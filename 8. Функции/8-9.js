// Написать функцию, принимающую массив отрицательных и положительных чисел. Она должна возвращать новый массив только с отрицательными числами.

const arr = [43, -23, -12, 5, -1, 42];

function filter(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const arrWithNegative = filter(arr);

console.log(arrWithNegative); // [-23, -12, -1]
