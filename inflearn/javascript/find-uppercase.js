function solution(str) {
  let answer = 0;

  for (let x of str) {
    if (x === x.toUpperCase()) {
      answer++;
    }

    // let num = x.charCodeAt();
    // if (num >= 65 && num <= 90) answer++;
  }

  return answer;
}

module.exports = solution;
