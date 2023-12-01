// Выведете количество разрядов числа x используя цикл. Выведете фразу "В числе 238 - 3 разряда". Притом слово "разряда" должно быть грамматически правильным (разряда, разрядов, разряд в зависимости от числа).
let num = 238;
let number = 238;
let count = 0;

while (num > 1) {
  num = Math.floor(num / 10);
  count++
}

  
let words = ["разряд", "разряда", "разрядов"];
  
function getNoun(count, words){
  if (count % 10 === 1 && count % 100 !== 11){
    return words[0];
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)){
    return words[1];
  } else {
    return words[2];
  }
  }
console.log(`В числе ${number} - ${count} ${getNoun(count, words)}`);
  