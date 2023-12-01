//Напишите функцию, которая сравнивает два массива, если они равны, вернуть true, иначе false.

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

let result = isEqual(arr1, arr2); // true
console.log(result);

function isEqual(arr1, arr2) {
  let result = true;

  //   if (arr1.length !== arr2.length) {
  //     result = false;
  //   } else {
  //     for (let i = 0; i < arr1.length; i++){
  //       if (arr1[i] !== arr2[i]) {
  //         result = false;
  //         break
  //       }
  //     }
  //   }
  //   return result;
  // }

  if (arr1.length !== arr2.length) {
    result = false;
  } else {
    result = arr1.every((elem, index) => elem === arr2[index]);
  }
  return result;
}
