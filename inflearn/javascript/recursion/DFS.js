function solution(v) {
  // stack-frame을 그리면 이해가 쉽다.
  let answer;
  function DFS(v) {
    if (v > 7) {
      // base-case
      return;
    } else {
      //   전위순회
      //   console.log(v);
      //   DFS(v * 2);
      //   DFS(v * 2 + 1);

      //   중위 순회
      //   DFS(v * 2);
      //   console.log(v);
      //   DFS(v * 2 + 1);

      // 후위 순회
      DFS(v * 2);
      DFS(v * 2 + 1);
      console.log(v);
    }
  }

  DFS(v);

  return answer;
}

console.log(solution(1));

// 1 2 4 5 3 6 7
