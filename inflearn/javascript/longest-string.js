function solution(array) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of array) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
module.exports = solution;
