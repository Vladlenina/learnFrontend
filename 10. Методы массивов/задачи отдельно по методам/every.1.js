//Дан массив. Проверить, являются ли все элементы числами.

const arr = [1, 45, 43, 4, 6, 8];
// const arr = [1, 45, "43", 4, 6, 8];
const result = arr.every((elem) => typeof elem === 'number');

console.log(result);
