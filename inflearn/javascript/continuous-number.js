function solution(m, arr) {
  let answer = 0,
    left = 0,
    right = 0,
    sum = 0;

  for (right; right < arr.length; right++) {
    if (arr[right] <= m) answer++;

    sum += arr[right];
    if (sum <= m) {
      answer++;
      console.log("sum", sum);
    } else {
      while (sum > m) {
        console.log("over sum", sum);
        sum -= arr[left++];
        if (sum <= m) answer++;
      }
    }
  }

  return answer;
}

// let a = [1, 3, 1, 2, 3]; // 10
// let a = [1, 1, 1, 1, 1]; // 10
let a = [10, 5, 2, 6];
console.log(solution(100, a)); // 10
