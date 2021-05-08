function solution(str) {
  let answer = "";
  //   str = str.replace(/[^0-9]/g, "");
  //   answer = parseInt(str, 10);

  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

console.log(solution("g0en2T0s8eSoft"));
