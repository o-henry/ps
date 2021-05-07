function solution(list) {
  let answer = [];

  answer.push(list[0]);

  for (let i = 1; i < list.length; i++) {
    if (list[i] > list[i - 1]) answer.push(list[i]);
  }

  return answer;
}

module.exports = solution;
