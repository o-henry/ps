/**
 * sort 후 값 비교
 */

function solution(arr) {
  let answer = [];

  let sorted = arr.slice().sort((a, b) => a - b);

  console.log(sorted, arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sorted[i]) answer.push(i + 1);
  }

  return answer;
}

let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
