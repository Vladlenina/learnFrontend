//- Напишите функцию `forEach`, которая принимает первым параметром массив, вторым - callback-функцию. callback-функцию должна применяться к каждому элементу исходного массива и принимает два параметра: сам элемент и индекс (`callback(array[index], index)`). Функция `forEach` ничего не возвращает.
//- Передайте в созданную функцию `forEach` любой массив, а в качестве callback-функции - функцию, которая будет выводит в консоль полученные аргументы с текстом `“Элемент … с индексом …”`, где первые `…` - это элемент массива, вторые `…` - это индекс элемента массива.

let a  = [1, 2, 3, 4, 5];
  
  forEach(a, showElementAndIndex);
  
  function forEach (array,callback){
    for(let index = 0; index < array.length; index ++) {
      const elem = array[index];
      callback(elem, index);
    }
  }
  
  function showElementAndIndex(elem, index) {
    console.log(`Элемент ${elem} с индексом ${index}`);
  }