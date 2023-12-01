let n = 7;
let prev1 = 1;
let prev2 = 1;
i = 1;
while (i <= n) {
  if (i < 3) {
    console.log(prev1);
  } else {
    let number = prev1 + prev2;
    console.log(number);
    prev1 = prev2;
    prev2 = number;
  }
  i++;
}
