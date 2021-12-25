function solution(N) {
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    answer = answer + i;
  }

  return answer;
}

module.exports = solution;
