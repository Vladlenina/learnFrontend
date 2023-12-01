// Написать функцию, получающую на вход одно число. Если число чётное - функция возвращает true , если нет - false.

console.log(isEven(42));
console.log(isEven(15));
console.log(isEven(-111));

function isEven(number) {
  return number % 2 === 0;
}
