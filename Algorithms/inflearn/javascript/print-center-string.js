function solution(str) {
  let answer = "",
    mid = Math.floor(str.length / 2);

  if (str.length % 2 === 1) answer += str[mid];
  // answer = str.substring(mid, mid+1)
  else answer += str[mid - 1] + str[mid];
  // answer = str.substring(mid-1, mid+1)

  return answer;
}

module.exports = solution;
