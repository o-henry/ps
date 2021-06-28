function curriculumDesign(need, plan) {
  let answer = "YES";
  let queue = need.split("");

  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) {
        answer = "NO";
      }
    }
  }

  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(curriculumDesign(a, b));

// function curriculumDesign(a, b) {
//   let stack = [];
//   for (let i = 0; i < b.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//       if (b[i] === a[j]) {
//         stack.push(b[i]);
//       }
//     }
//   }

//   return stack.join("") === a ? "YES" : "NO";
// }

// let a = "CBA";
// let b = "CBDAGE";
// console.log(curriculumDesign(a, b));
