function solution(words) {
  let answer = [];
  words.forEach((ele) => (answer.includes(ele) ? ele : answer.push(ele)));

  // answer = Array.from(new Set(words))
  return answer;
}

module.exports = solution;
