/**
 * 멱집합
 * 주어진 집합의 모든 부분집합의 집합
 *
 * [1, 2, 3]
 * []
 * [1] [2] [3]
 * [1, 2] [1, 3] [2, 3]
 * [1, 2, 3]
 */

function solution(arr) {
  let n = arr.length;
  let check = Array.from({ length: n }, () => 0);
  let subSets = [];

  function DFS(L) {
    if (L === n) {
      let subSet = arr.filter((v, idx) => check[idx]);
      subSets.push(subSet);
      return;
    } else {
      check[L] = 1;
      DFS(L + 1);
      check[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(0);
  return subSets;
}

let arr = [1, 2, 3];
console.log(solution(arr));
