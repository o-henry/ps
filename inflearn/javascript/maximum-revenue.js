function solution(k, arr) {
  let answer,
    max = 0;

  for (let i = 0; i < k; i++) max += arr[i];
  answer = max;

  for (let i = k; i < arr.length; i++) {
    max += arr[i] - arr[i - k];
    answer = Math.max(answer, max);
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

// function solution(arr, k) {
//   let answer = Number.MIN_SAFE_INTEGER,
//     sum = 0,
//     lt = 0;

//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     if (rt === k) {
//       sum -= arr[lt++];
//       k++;
//     }

//     answer = Math.max(sum, answer);
//   }

//   return answer;
// }
