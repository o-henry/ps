function solution(a, b, c) {
  // 가장 큰값 < 나머지 두 변의 값을 합친값보다 작으면 된다.
  let answer = "No",
    max = 0;

  let sum = a + b + c;
  max = Math.max(a, b, c);

  if (sum - max < max) return answer;
  return (answer = "YES");
}

console.log(solution(6, 7, 14));
