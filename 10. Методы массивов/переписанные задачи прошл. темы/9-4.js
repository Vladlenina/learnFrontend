//Используйте функцию map из предыдущей задачи. Функция map будет принимать числовой массив, который состоит только из 1 и 0 в случайном порядке.
// Напишите callback-функцию, которая будет инвертировать элемент предыдущего массива и возвращать это инвертированное значение. Callback-функцию можно создавать стрелочным способом.

const arr = [1, 1, 0, 0, 1, 0, 1];

const newArr = arr.map((elem) => {
  if (elem === 1) {
    return 0;
  } else {
    return 1;
  }
})
console.log(newArr)