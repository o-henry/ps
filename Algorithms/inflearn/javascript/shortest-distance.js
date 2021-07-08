function solution(s, t) {
  let answer = [];
  let p = 1000; // 문자열의 길이가 100을 넘지 않으므로 충분히 큰 값

  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;
  for (let j = s.length - 1; j >= 0; j--) {
    if (s[j] === t) {
      p = 0;
    } else {
      p++;
      answer[j] = Math.min(answer[j], p);
    }
  }

  return answer;
}

console.log(solution("teachermode", "e"));
