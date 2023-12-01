//Используйте функцию filter из предыдущей задачи. Функция filter будет принимать массив с числами и строками. Напишите callback-функцию, которая будет проверять тип элемента. Если тип элемента string, возвращает true, иначе false. Callback-функцию можно создавать стрелочным способом.

function filter(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    const result = callback(arr[i], i);
    if (result === true) {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

function myCallback(element) {
  if (typeof element  === 'string' ){
    return true;
  } else {
    return false;
  }
}

const arr1 = [4, "i", 67, "phone", -434, "42"]
const result  = filter(arr1, myCallback);
console.log(result)