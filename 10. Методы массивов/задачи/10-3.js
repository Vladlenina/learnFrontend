//Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки (””), ноль (0), null.

const arr = [1, false, '42', '', null, 67, undefined, -45, 0, 'apple'];
const newArr = withoutEmpty(arr);
console.log(newArr); // [1, "42", 67, -45, "apple"]

// function withoutEmpty(array) {
//   let newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// }

function withoutEmpty(array) {
  return array.filter((elem) => elem);
}
