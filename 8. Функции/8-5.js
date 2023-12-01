// Написать функцию, принимающую массив чисел. Она должна развращать элемент с максимальным значением.

function max(array) {
  let maxNumber = -Infinity;
  for(let i = 0; i < array.length; i++){
    if(array[i] > maxNumber){
      maxNumber = array[i]
    }
  }
  return maxNumber
}

console.log(max([1, 42, 34, 12])); // 42
console.log(max([-5, -10, -100])); // -5
