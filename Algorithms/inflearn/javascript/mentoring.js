// (i, j) 는 학생 번호
// 주어진 배열의 숫자는 학생번호
// 인덱스 값은 등수가 된다.
// N이 학생수, M이 테스트 횟수

function solution(list) {
  let answer = 0;
  let m = list.length, // test, row
    n = list[0].length; // Number of students
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let flag = 0;

      for (let k = 0; k < m; k++) {
        let ti = 0,
          tj = 0;
        for (let l = 0; l < n; l++) {
          // l = 등수
          if (list[k][l] === i) ti = l;
          if (list[k][l] === j) tj = l;
        }
        if (ti < tj) flag++;
      }
      if (flag === m) answer++;
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(arr));
