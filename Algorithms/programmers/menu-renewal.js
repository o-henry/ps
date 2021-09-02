function solution(o, c) {
  let answer = [];
  let tmp = [];
  let check = [];

  o.forEach((e) => {
    check.push(Array.from({ length: e.length }, () => 0));
  });
  c.forEach((e) => {
    tmp.push(Array.from({ length: e }, () => 0));
  });

  console.log("tmp", tmp, check);

  for (let x of c) {
    DFS(0, x);
  }

  function DFS(L, x) {
    if (L === x) {
      return;
    } else {
      for (let i = 0; i < o.length; i++) {}
    }
  }
}

let orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
let course = [2, 3, 4];
console.log(solution(orders, course));
