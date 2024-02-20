//Дан числовой массив. Найти первый элемент, который нацело делится на 13.
const arr = [1, 5, 89, 51, 39, 90, 13, 78];
const result = arr.find((elem) => elem % 13 === 0)
console.log(result)