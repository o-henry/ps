function solution(list) {
  let answer = [];
  let flag = 1,
    cnt = 0;
  let sorted = list.sort();

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== flag) {
      answer.push(flag);
      flag++;
    } else {
      flag++;
    }
  }

  console.log(answer);
  return answer;
}

console.log(solution([3, 3, 1]));
