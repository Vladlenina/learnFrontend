//Используйте функцию find из предыдущей задачи. Функция find будет принимать числовой массив. Напишите callback-функцию, которая будет проверять элемент на условие - его остаток от деления на 5 должен равняться 3. Если элемент удовлетворяет условию, возвращает true, иначе false. Callback-функцию можно создавать стрелочным способом.

function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i], i);
    if (result) {
      return arr[i];
    }
  }
  return undefined;
}

function myCallback(element) {
  if (element % 5 === 3) {
    return true;
  } else {
    return false;
  }
}

const arr1 = [3, 8, 13, 18];
const arr2 = [4, 7, 9, 10];
const result = find(arr1, myCallback);
const result2 = find(arr2, myCallback);
console.log(result);
console.log(result2);
