// Выведете матрицы как в предыдущем задании, но размер матрицы должен быть заранее задан переменной n (n строк, n столбцов).
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 0 0 0 0 0 1 1 1 1 1
// 0 0 0 0 0 1 1 1 1 1
// 0 0 0 0 0 1 1 1 1 1
// 0 0 0 0 0 1 1 1 1 1
// 0 0 0 0 0 1 1 1 1 1

let n = 10;
for (let i = 0; i < n; i++) {
  let str = '';
  for (let j = 0; j < n; j++) {
    if ((i < n / 2 && j < n / 2) || (i >= n / 2 && j >= n / 2)) {
      str += '1';
    } else {
      str += '0';
    }
  }
  console.log(str);
}
