function solution(s) {
  let answer = [];
  let ct = 0;
  let cz = 0;

  let tmp = "";

  function DFS(s, ct, cz) {
    console.log(s);

    if (s.length === "1") {
      return;
    } else {
      for (let x of s) {
        if (parseInt(x) === 0) {
          cz++;
        } else {
          tmp += x;
          tmp = tmp.length.toString(2);
          DFS(tmp, ct++, cz);
        }
      }
    }
  }

  DFS(s, ct, cz);

  return answer;
}

// console.log(solution("110010101001"));
console.log(solution("01110"));
// console.log(solution("1111111"));
