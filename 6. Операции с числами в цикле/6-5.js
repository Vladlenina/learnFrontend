// Поделите число x на разряды и выведете каждый разряд в отдельно строке таким образом (с последнего до первого):
// x = 10819

// 1 цифра равна 9
// 2 цифра равна 1
// 3 цифра равна 8
// 4 цифра равна 0
// 5 цифра равна 1

let num = 10819;

for (let count = 1; num > 0; count++) {
  let digit = num % 10;
  console.log(`${count} цифра равна ${digit}`);
  num = Math.floor(num / 10);
}

// let num = 10819;
// let digit = 0;

// while (num > 0) {
//   digit = num % 10;
//   num = Math.floor(num / 10);
//   console.log(digit);
//   digit++;
// }
