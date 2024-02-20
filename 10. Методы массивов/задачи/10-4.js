//Напишите функцию, которая убирает повторяющиеся элементы в массиве. Постараться сохранить исходный порядок элементов в массиве.

const arr = [1, 2, 2, 3, 3, 4, 5, 6, 6];
const newArr = unique(arr);
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

// function unique(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

function unique(arr) {
  return arr.filter((elem, index) => arr.indexOf(elem) === index);
}

// const arr = [1, 2, 2, 3, 3, 4, 5, 6, 6];
//   const newArr = unique(arr);
//   console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

//   function unique(array){
//     const result = [];
//      array.forEach((element) => {
//       if (!result.includes(element)){
//           result.push(element);
//       }
//     })
//     return result
//   }
