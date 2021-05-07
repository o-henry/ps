function solution(str) {
  let answer = "";
  // string에서 'A'를 찾아 #으로 치환한다.
  // 정규표현식

  //   for (let i = 0; i < str.length; i++) {
  //     str[i] === "A" ? (answer += "#") : (answer += str[i]);
  //   }

  answer = str.replace(/A/g, "#");

  return answer;
}

module.exports = solution;
