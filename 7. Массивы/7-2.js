// Дан массив a. Выведете минимальный и максимальный элементы массива.

let a = [5, 2, -1, 9];

let min = 9;
let max = -1;
  
  for (let i = 0; i < a.length; i++){
    if(a[i] > max){
        max = a[i];
    } 
    if (a[i] < min){
      min =  a[i];
    }
  }
  console.log(`max = ${max}`);
  console.log(`min = ${min}`);

// let max = Math.max(...a);
// let min = Math.min(...a);

// console.log(`max = ${max}`);
// console.log(`min = ${min}`);
