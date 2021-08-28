// function solution(times) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let t_line = [];

//   for (let x of times) {
//     t_line.push([x[0], "s"]);
//     t_line.push([x[1], "e"]);
//   }

//   t_line.sort((a, b) => {
//     if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
//     else return a[0] - b[0];
//   });

//   let cnt = 0;
//   for (let x of t_line) {
//     if (x[1] === "s") cnt++;
//     else cnt--;
//     answer = Math.max(answer, cnt);
//   }

//   return answer;
// }

function solutionA(times) {
  let count = 0;

  let x = times.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else {
      return a[0] - b[0];
    }
  });

  let pos = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[pos][1] > x[i][0]) count++;
    else {
      break;
      pos++;
    }
  }
  return count;
}

let arr = [
  [17, 28],
  [6, 30],
  [1, 27],
  [19, 38],
  [4, 46],
  [23, 30],
  [35, 43],
  [26, 45],
  [21, 31],
  [11, 44],
];

console.log(solution(arr));
console.log(solutionA(arr));
