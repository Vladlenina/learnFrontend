//Используйте функцию map из предыдущей задачи. Функция map будет принимать числовой массив, который состоит только из 1 и 0 в случайном порядке. Напишите callback-функцию, которая будет инвертировать элемент предыдущего массива и возвращать это инвертированное значение. Callback-функцию можно создавать стрелочным способом.
const array = [1, 2, 3, 4, 5];
const array1 = [1, 1, 0, 0, 1, 0, 1];

function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const newElem = callback(arr[i], i);
    newArr.push(newElem);
  }
  return newArr;
}

function myCallback(element) {
  if (element === 1) {
    return 0;
  } else {
    return 1;
  }
}

const result = map(array1, myCallback);
console.log(result);
