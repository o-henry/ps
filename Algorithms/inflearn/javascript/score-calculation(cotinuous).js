function solution(list) {
  let answer = 0,
    count = 0;
  // 0과 0사이

  for (let x of list) {
    if (x === 1) {
      count++;
      answer += count;
    } else count = 0;
  }

  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])); // 10
console.log(solution([1, 0, 1, 1, 1, 0, 1, 1, 0])); // 10
