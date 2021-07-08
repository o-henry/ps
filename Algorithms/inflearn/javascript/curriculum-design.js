function curriculumDesign(need, plan) {
  let answer = "YES";
  let queue = need.split("");

  for (let x of plan) {
    if (queue.includes(x)) {
      console.log(x);
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
