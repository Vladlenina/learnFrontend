// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0
// 1 1 1 1 1 0 0 0 0 0

for (let i = 0; i < 10; i++) {
  let str = '';
  for (let j = 0; j < 10; j++) {
    if (j < 5) {
      str += '1';
    } else {
      str += '0';
    }
  }
  console.log(str);
}
