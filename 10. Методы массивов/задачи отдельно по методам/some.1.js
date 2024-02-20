//Дан массив. Проверить, есть ли в нём хотя бы один строковый элемента.
const arr = [1, 45, 43, 4, 6, 8];
// const arr = [1, 45, "43", 4, 6, 8];

const result = arr.some((elem) => typeof elem === 'string');

console.log(result);
