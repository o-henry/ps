function solution(u, b) {
  let answer = Array.from({ length: b.length }, () => 0);
  let tmp = [];
  let pa = 0,
    pb = 0;

  for (let i = 0; i < u.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (u[i].length === b[j].length) {
        if (b[j][pb] === "*") {
          pb++;
          pa++;
          continue;
        } else if (u[i][pa++] === b[j][pb++]) {
          answer[j] = u[i];
          tmp.push(answer.slice());
          i++;
        }
      }
    }
  }

  console.log(tmp);
  //   return tmp;
}

let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
let banned_id = ["fr*d*", "abc1**"];
// let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
// let banned_id = ["*rodo", "*rodo", "******"];
// let user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"];
// let banned_id = ["fr*d*", "*rodo", "******", "******"];
console.log(solution(user_id, banned_id));
