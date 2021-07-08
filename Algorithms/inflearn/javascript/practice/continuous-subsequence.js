function solution(n, arr) {
  let answer = 0,
    sum = 0,
    left = 0,
    right = 0;

  for (right; right < arr.length; right++) {
    sum += arr[right];
    if (sum === n) answer++;
    else {
      while (sum >= n) {
        sum -= arr[left++];
        if (sum === n) answer++;
      }
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
