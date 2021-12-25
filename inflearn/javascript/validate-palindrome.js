function solution(str) {
  function isPalindrome(list) {
    let result = "YES";
    list.join("") == list.reverse().join("") ? result : (result = "NO");
    return result;
  }

  str = str
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");

  return isPalindrome(str);
}

let str = "found7, time: study; Yduts; emit, 7Dnuof2";
console.log(solution(str));
