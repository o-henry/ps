function solution(str, target) {
  let answer = str.split(target).length;

  // for (let x of str) {
  //   if (x === target) answer++;
  // }

  return answer - 1;
}

module.exports = solution;
