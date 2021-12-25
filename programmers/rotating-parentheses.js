function solution(str) {
  let stack = str.split("");
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    let tmp = stack.shift();

    if (check(stack)) {
      stack.push(tmp);
    } else {
      cnt++;
      stack.push(tmp);
    }
    console.log("stack", stack);
  }

  function check(arr) {
    let obj = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    for (let x of arr) {
      for (let key in obj) {
        if (x === key) {
          return false;
        }
      }
    }
  }

  return cnt;
}

// console.log(solution("[](){}"));
console.log(solution("}]()[{"));
