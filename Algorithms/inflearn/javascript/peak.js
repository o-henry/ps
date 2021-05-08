function solution(list) {
  let answer = 0;
  let n = list.length;
  //   let dx = [-1, 0, 1, 0];
  //   let dy = [0, 1, 0, -1];

  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          list[nx][ny] >= list[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

let list = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(list));

/**
 * 4방향 탐색
 */
