//Используйте функцию forEach из предыдущей задача. Напишите callback-функцию, которая будет для каждого элемента числового массива рассчитывать сумму элемента с его индексом и выводить в консоль. Callback-функцию можно создавать стрелочным способом.

let a = [1, 2, 3, 4, 5];

forEach(a, showElementAndIndex);

function forEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    const elem = array[index];
    callback(elem, index);
  }
}

function showElementAndIndex(elem, index) {
  let result = elem + index;
  console.log(`${elem} + ${index} = ${result}`);
}
