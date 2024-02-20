//Написать функцию, которая будет искать массив внутри двумерного массива и возвращать индекс найденного элемента, иначе возвращает -1.
const twoDimArray = [
  [0, 0, 0],
  [1, 1, 1],
  [2, 2, 3],
];
const query1 = [2, 2, 3];
const result1 = indexOfArray(twoDimArray, query1);
console.log(result1); // 1

const query2 = [4, 4, 4];
const result2 = indexOfArray(twoDimArray, query2);
console.log(result2); // -1

function isEqual(arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length) {
    result = false;
  } else {
    result = arr1.every((elem, index) => elem === arr2[index]);
  }
  return result;
}

function indexOfArray(array, queryArr) {
  const result = array.findIndex((elem) => isEqual(elem, queryArr));
  return result;
}
