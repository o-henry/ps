function solution(a, b) {
  let answer = [];

  let result = {
    1: 3,
    2: 1,
    3: 2,
  };

  for (let i = 0; i < a.length; i++) {
    if (result[a[i]] === b[i]) answer.push("A");
    else if (result[b[i]] === a[i]) answer.push("B");
    else answer.push("D");
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
