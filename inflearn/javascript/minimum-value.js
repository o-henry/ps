function solution(arr) {
  let answer;
  answer = arr.reduce((acc, curr) => (acc < curr ? acc : curr));
  return answer;

  // Math.min(...arr)
}

module.exports = solution;
