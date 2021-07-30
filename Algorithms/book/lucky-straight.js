function LuckyStraight(num) {
  let str = num.toString();
  let mid = str.length / 2;
  let left = 0,
    right = str.length;
  let sum = 0;

  while (left < mid) {
    sum += parseInt(str[left++]);
  }

  while (mid < right) {
    sum -= parseInt(str[mid++]);
  }

  return sum ? "READY" : "LUCKY";
}

console.log(LuckyStraight(123402));
// console.log(LuckyStraight(7705));
