function solution(left, right) {
  var answer = 0;

  while (left <= right) {
    let divisor = [];
    for (let i = 0; i <= left; i++) {
      if (left % i === 0) {
        divisor.push(i);
      }
    }
    if (divisor.length % 2 === 0) {
      answer += left;
    } else {
      answer -= left;
    }
    left++;
  }

  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
