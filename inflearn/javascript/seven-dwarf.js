function solution(dwarfs) {
  let answer = dwarfs;
  let sum = answer.reduce((acc, curr) => (acc += curr), 0);

  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = i + 1; j < answer.length; j++) {
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
      }
    }
  }
  return answer;
}

module.exports = solution;
