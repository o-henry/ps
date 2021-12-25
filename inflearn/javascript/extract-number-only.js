function solution(str) {
  let answer = "";

  for (let i of str) {
    if (!isNaN(i)) {
      answer += i;
    }
  }

  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
