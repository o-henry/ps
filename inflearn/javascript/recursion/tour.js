function solution(tickets) {
  var answer = [];
  let check = Array.from({ length: tickets.length }, () => 0);
  let tmp = ["ICN"];

  function DFS(L, T) {
    if (L === tickets.length) {
      answer.push(tmp.slice());
    } else {
      for (let x of tickets) {
        if (x[0] === T) {
          check[L] = 1;
          if (check[L] === 1) tmp.push(x[1]);

          DFS(L + 1, x[1]);
          check[L] = 0;
        }
      }
    }
  }

  DFS(0, "ICN");

  return answer.flat();
}

// console.log(
//   solution([
//     ["ICN", "JFK"],
//     ["HND", "IAD"],
//     ["JFK", "HND"],
//   ])
// );
// ["ICN", "JFK", "HND", "IAD"]

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
// // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
