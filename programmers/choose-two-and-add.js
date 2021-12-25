function solution(arr) {
  let answer = new Set();

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      sum = arr[i] + arr[j];
      answer.add(sum);
    }
  }

  answer = [...answer].sort((a, b) => a - b);
  return answer;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
