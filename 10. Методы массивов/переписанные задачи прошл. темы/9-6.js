//Используйте функцию filter из предыдущей задачи. Функция filter будет принимать массив с числами и строками. Напишите callback-функцию, которая будет проверять тип элемента. Если тип элемента string, возвращает true, иначе false. Callback-функцию можно создавать стрелочным способом.


const arr1 = [4, "i", 67, "phone", -434, "42"];

const result = arr1.filter((element) => typeof element === 'string');

console.log(result);
