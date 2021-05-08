function solution(list) {
  let n = list.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // i가 0일때 j는 n까지, 1일 때, ... 반복
      if (list[i] < list[j]) answer[i]++;
    }
  }
  return answer;
}

console.log(solution([87, 89, 92, 100, 76]));

/**
 * 구현 아이디어
 *
 * 초기
 * sorting 한뒤,
 * 바뀐 index를 비교하는 방법으로 생각.
 *
 *
 */

//  function solution(arr) {
//   let answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     let rank = 1;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         rank++;
//       }
//     }
//     answer.push(rank);
//   }

//   return answer;
// }

// const arr = [87, 89, 92, 100, 76];

// console.log(solution(arr));
