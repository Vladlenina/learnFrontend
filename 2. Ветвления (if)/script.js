// task 1
let a = 4;
let b = 5;

if (a > b) {
  console.log('a больше b');
} else {
  console.log('b больше a');
}

// task 2
let age = 18;

if (age < 7) {
  console.log('ребёнок');
} else if (age >= 7 && age <= 17) {
  console.log('подросток');
} else {
  console.log('взрослый');
}

// task 3
// let a = 3;
// let b = 2;
// let c = 4;

if (a > b && a > c) {
  console.log('Максимальный a');
} else if (b > a && b > c) {
  console.log('Максимальный b');
} else {
  console.log('Максимальный c');
}

// task 4

// let a = 3;
// let b = 2;
// let c = 4;

if (a > b && a < c) {
  console.log('Срредний a');
} else if (b > a && b < c) {
  console.log('Средний b');
} else {
  console.log('Средний c');
}

// task 5

let x = 11;

if (x % 2 === 0) {
  console.log('Число четное');
} else {
  console.log('Число нечетное');
}

// task 6
// let a = 2;
// let b = 4;
// let c = 2;
let d = b * b - 4 * a * c;
let x1 = (-b + Math.sqrt(d)) / (2 * a);
let x2 = (-b - Math.sqrt(d)) / (2 * a);

if (d > 0) {
  console.log(x1);
  console.log(x2);
} else if (d === 0) {
  console.log(x1);
} else {
  console.log('корней нет');
}

// task 7
let year = 2001;

if (year % 4 === 0 && year % 100 !== 0) {
  console.log('год високосный');
} else if (year % 400 === 0) {
  console.log('год високосный');
} else {
  console.log('год обычный');
}