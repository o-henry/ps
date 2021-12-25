function solution(list) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = list.length;
  let sum1 = 0,
    sum2 = 0;

  for (let i = 0; i < n; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += list[i][j];
      sum2 += list[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += list[i][i];
    sum2 += list[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

let list = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(list));

/**
 * 구현 로직
 * 이차원 배열 = 이중 포문
 * 대각선의 경우, i와 j가 같을때 와
 * (0, 4)(1, 3)(2, 2)(3, 1)(4, 0)
 * (i, length)(i+1, length-1)(i+2, length-2)(i+3, length - length)
 */
