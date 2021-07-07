/**
 *
 * @param {*} n number
 * @returns binary number
 */

function solution(n) {
  let answer = "";

  function DFS(L) {
    // 몫을 2로 계속 나누는 코드
    if (L === 0) return;
    else {
      DFS(parseInt(L / 2));
      answer += L % 2; // 답은 나머지를 다 더한 값
    }
  }

  DFS(n);

  return answer;
}

// n = n.toString(2);
console.log(solution(11));
