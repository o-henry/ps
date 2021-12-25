function rearrangeString(str) {
  let num = 0;
  let answer = [];

  for (let x of str) {
    if (isNaN(x)) {
      answer.push(x);
    } else {
      num += parseInt(x);
    }
  }

  answer.sort();
  answer.push(num);

  return answer.join("");
}

console.log(rearrangeString("K1KA5CB7"));
console.log(rearrangeString("AJKDLSI412K4JSJ9D"));
