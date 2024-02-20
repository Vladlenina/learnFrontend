//Дан массив массивов. Создать новый массив, элементами которого будет длины подмассивов исходного массива.

const arr = [
  [1, 2, 3],
  ['apple', 'orange'],
  [34, 5346, 321, 1],
  ['cat', 'dog', 'piggy'],
];
const result = arr.map((elem) => elem.length);
console.log(result);
