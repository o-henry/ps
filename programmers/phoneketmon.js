// function solution(arr) {
//   let map = new Map();
//   let n = arr.length / 2;
//   let answer = 0;

//   arr.forEach((e) => {
//     map.has(e) ? map.set(e, map.get(e) + 1) : map.set(e, 0);
//   });

//   let tmp = [];
//   for (let [key, value] of map) {
//     tmp.push(key);
//   }

//   if (tmp.length === n) {
//     answer = n;
//   } else if (tmp.length > n) {
//     answer = n;
//   } else {
//     answer = tmp.length;
//   }

//   return answer;
// }

// console.log(solution([3, 1, 2, 3])); // 2
// console.log(solution([3, 3, 3, 2, 2, 4])); // 3
// console.log(solution([3, 3, 3, 2, 2, 2])); // 2

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
