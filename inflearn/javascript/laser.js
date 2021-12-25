// 19분 소요
function laser(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      stack.pop();
      if (s[i - 1] === "(") answer += stack.length;
      else answer += 1;
    }
  }

  return answer;
}

let input = "()(((()())(())()))(())";
console.log(laser(input));

// function laser(s) {
//     let answer = 0;
//     let stack = [];

//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === "(" && s[i + 1] === ")") {
//         answer += stack.length;
//       } else if (s[i] === "(") {
//         stack.push(s[i]);
//       } else if (s[i] === ")") {
//         answer += 1;
//         stack.pop();
//       }
//     }

//     return answer;
//   }

//   // let input = "()(((()())(())()))(())";
//   let input = "((()()))";
//   console.log(laser(input));
