function correctParentheses(str) {
  let left = [],
    right = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      left.push(str[i]);
    } else {
      right.push(str[i]);
    }
  }

  return left.length === right.length;
}

function diffCorrectParentheses(str) {
  let answer = "YES";
  let stack = [];

  for (let _ of str) {
    if (_ === "(") stack.push(_);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  return answer;
}

let input = "(()(()))(()";
console.log(correctParentheses(input));
console.log(diffCorrectParentheses(input));
