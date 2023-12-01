//Используйте функцию find из предыдущей задачи. Функция find будет принимать числовой массив. Напишите callback-функцию, которая будет проверять элемент на условие - его остаток от деления на 5 должен равняться 3. Если элемент удовлетворяет условию, возвращает true, иначе false. Callback-функцию можно создавать стрелочным способом.

const arr1 = [3, 8, 13, 18];

const result = arr1.find((element) => element % 5 === 3);

console.log(result);

const arr2 = [4, 7, 9, 10];

const result1 = arr2.find((element) => element % 5 === 3);

console.log(result1);
