//Используйте функцию forEach из предыдущей задача. Напишите callback-функцию, которая будет для каждого элемента числового массива рассчитывать сумму элемента с его индексом и выводить в консоль. Callback-функцию можно создавать стрелочным способом.
let arr = [1, 2, 3, 4, 5];

const newArr = arr.forEach((element, index) => {
  let result = element + index;
  console.log(`${element} + ${index} = ${result}`)
});
