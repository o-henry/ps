/**
 *
 * @param {* greedy, linear-search, }
 * @returns
 */

function solution(m, list) {
  let answer = 0,
    n = list.length;
  let sorted = list.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  return answer;
}

let list = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

let m = 28;

console.log(solution(m, list));
