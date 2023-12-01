// Выведите первые члены последовательности Фибоначчи, которые не превышают числа x вместе с порядковым номером члена последовательности, а также напишите чётное число или нечётное:
// x = 10
// 1. 1 - нечётное
// 2. 1 - нечётное
// 3. 2 - чётное
// 4. 3 - нечётное
// 5. 5 - нечётное
// 6. 8 - чётное

let x = 10 ;
let prev1 = 1;
let prev2 = 1;

for (let i = 1; i <= x; i++) {
  if (i < 3 ) {
    let evenPrev1 = prev1 % 2 === 0 ? 'четное' : 'нечетное';
    console.log(`${i}. ${prev1} - ${evenPrev1}`);
  } else if (prev2 + prev1 < x){
    let number = prev1 + prev2;
    let evenNumber = number % 2 === 0 ? 'четное' : 'нечетное';
    console.log(`${i}. ${number} - ${evenNumber}`);
    prev1 = prev2;
    prev2 = number;
  }
}