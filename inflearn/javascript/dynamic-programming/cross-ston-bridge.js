function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0);
  dy[0] = 1;
  dy[1] = 2;

  for (let i = 2; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  answer = dy[n];
  return answer;
}

console.log(solution(7));
