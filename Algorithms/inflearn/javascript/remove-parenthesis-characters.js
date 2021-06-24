function removeParenthesis(str) {
  let stack = [];

  for (let _ of str) {
    if (_ !== ")") stack.push(_);
    else {
      while (stack[stack.length - 1] !== "(") {
        stack.pop();
      }
      stack.pop();
    }
  }
  return stack.join("");
}

function diffRemoveParenthesis(str) {
  let answer,
    stack = [];
  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
}

let input = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(removeParenthesis(input)); // EFLM
console.log(diffRemoveParenthesis(input));
