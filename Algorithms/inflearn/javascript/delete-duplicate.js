function solution(str) {
  let answer = "";
  // hash
  //   let obj = {};
  //   for (let x of str) {
  //     if (!obj[x]) obj[x] = 1;
  //     else obj[x]++;
  //   }
  //   answer = Object.keys(obj).join("");

  //   for (let i = 0; i < str.length; i++) {
  //     console.log(str[i], i, str.indexOf(str[i]));
  //     if (str.indexOf(str[i] === i)) answer += str[i];
  //   }

  for (let item of str) {
    if (!answer.includes(item)) answer += item;
  }

  return answer;
}

module.exports = solution;
