function solution(str) {
  let answer = "YES";
  str = str.toLowerCase();
  let n = str.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (str[i] !== str[n - i - 1]) answer = "NO";
  }

  // return str.split("").join("") == str.split("").reverse().join("");
  return answer;
}

console.log(solution("gooG"));
console.log(solution("goob"));
