function solution(str) {
  let answer = "";

  for (let item of str) {
    if (!answer.includes(item)) answer += item;
  }

  return answer;
}

module.exports = solution;
