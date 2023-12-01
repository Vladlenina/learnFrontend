//- Напишите функцию `find`, которая принимает первым параметром массив, вторым - callback-функцию. Функция `find` должна находить элемент по условию и возвращать его, иначе элемент не найден и возвращает `undefined`. сallback-функцию должна проверять каждый элемент исходного массива на соответствие заданному условию внутри самой сallback-функции. Она должна принимать два параметра: сам элемент и индекс, а также возвращать булевое значение  (`const result = callback(array[index], index)`, где `result` может быть либо `true`, либо `false`). Если `result` равен `true`, то необходимо прекратить поиск и вернуть найденный элемент, если `false`, то продолжаем поиск. Если после завершения поиска, элемент не был найдет, то функция `find` возвращает `undefined`.
//- Передайте в созданную функцию `find` массив строк, а в качестве callback-функции - функцию, которая будет проверять элемент на равенство строке `“apple”.` Если элемент равен строке `“apple”`, то возвращает `true`. в противном случае возвращает `false`. Callback-функцию можно создавать стрелочным способом.

function find(arr, callback) {
  for (let i = 0; i < arr.length; i++){
    const result = callback(arr[i], i);
    if (result) {
      return arr[i];
    }
  }
  return undefined
}

function myCallback(element) {
  if ( element  === 'apple' ){
    return true;
  } else {
    return false;
  }
}

const arr1 = ["apricot", "banana", "kiwi", "lime", "apple", "mango"];
const arr2 = ["apricot", "banana", "kiwi", "lime", "42", "mango"];

const result  = find(arr1, myCallback);
const result2  = find(arr2, myCallback);

console.log(result)
console.log(result2)
