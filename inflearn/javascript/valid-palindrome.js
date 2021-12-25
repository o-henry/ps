function solution(str) {
  let answer = "NO";

  str = str.toLowerCase().replace(/[^a-z]/g, "");

  if (str.split("").join("") == str.split("").reverse().join("")) {
    answer = "YES";
  }

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
