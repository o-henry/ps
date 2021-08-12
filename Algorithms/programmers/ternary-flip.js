function solution(n) {
  // toString();
  var answer = 0;
  let tmp = "";

  function dfs(n) {
    if (n === 1) {
      tmp += 1;

      for (let i = tmp.length - 1; i >= 0; i--) {
        if (parseInt(tmp[i]) !== 0) {
          answer += parseInt(tmp[i]) * Math.pow(3, tmp.length - 1 - i);
        }
      }
    } else {
      tmp += n % 3;
      dfs(parseInt(n / 3));
    }
  }

  dfs(n);

  return answer;
}

// function solution(n) {
//   let answer = 0;
//   let tmp = n.toString(3).split("").reverse().join("");

//   for (let i = tmp.length - 1; i >= 0; i--) {
//     if (parseInt(tmp[i]) !== 0) {
//       answer += parseInt(tmp[i]) * Math.pow(3, tmp.length - 1 - i);
//     }
//   }

//   return answer;
// }

solution(45);
