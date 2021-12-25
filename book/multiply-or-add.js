function solution(str) {
  let arr = str.split("").map((item) => +item);
  let sum = 1;

  arr.forEach((x) => {
    if (x === 0 || x === 1) {
      sum += x;
    } else {
      sum *= x;
    }
  });

  return sum;
}

console.log(solution("02984"));
console.log(solution("567"));
