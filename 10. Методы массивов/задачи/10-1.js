//Даны два массива. Написать функцию, которая будет из первого массива удалять все значения второго, возвращая новый массив. Порядок оставшихся элементов должен сохраняться.

// const arr = arrayDiff([1, 2], [1]);
// console.log(arr); // [2]

// const arr2 = arrayDiff([1, 2, 2, 4, 4, 3], [2, 4]);
// console.log(arr2); // [1, 3]

// function arrayDiff(array1, array2) {
//   let newArr = [];
//   for (let i = 0; i < array1.length; i++){
//     if(!array2.includes(array1[i])){
//       newArr.push(array1[i]);
//     }
//   }
//   return newArr
// }

const arr = arrayDiff([1, 2], [1]);
console.log(arr); // [2]

const arr2 = arrayDiff([1, 2, 2, 4, 4, 3], [2, 4]);
console.log(arr2); // [1, 3]

function arrayDiff(array1, array2) {
  return array1.filter((elem) => !array2.includes(elem));
}
