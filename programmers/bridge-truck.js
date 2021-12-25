function solution(s) {
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        s.splice(i + 1, 2);
        console.log(s);
      }
    }
  }

  return s.length ? 0 : 1;
}
console.log(solution("baabaa"));
