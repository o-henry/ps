function solution(arr) {
  arr.sort((a, b) => a - b);
  let res = 0,
    cnt = 0; // 모험가 수

  for (let x of arr) {
    // x는 공포도
    cnt += 1;
    if (cnt >= x) {
      res += 1;
      cnt = 0;
    }
  }

  return res;
}

console.log(solution([2, 3, 1, 2, 2]));
