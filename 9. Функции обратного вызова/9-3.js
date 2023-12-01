//- Напишите функцию `map`,  которая принимает первым параметром массив, вторым - callback-функцию. Функция `map` должна создавать новый массив и возвращать его. сallback-функцию должна применяться к каждому элементу исходного массива и принимает два параметра: сам элемент и индекс, а также возвращать элемент нового массива (`const newElem = callback(array[index], index)`). Созданный новый элемент должен записываться в новый массив.
//- Передайте в созданную функцию `map` числовой массив, а в качестве callback-функции - функцию, которая будет высчитывать квадрат каждого элемента и возвращать его. Callback-функцию можно создавать стрелочным способом.

const array = [1, 2, 3, 4, 5];

function map(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const newElem = callback(arr[i], i);
    newArr.push(newElem);
  }
  return newArr;
}

function myCallback(element) {
  return element * element;
}

const result = map(array, myCallback);
console.log(result);
