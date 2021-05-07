function solution(list) {
  let answer = 0;

  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] < list[i + 1]) {
      answer++;
    }
  }

  return answer;
}

// let list = [130, 135, 148, 140, 145, 150, 150, 153];
let list = [160, 135, 132, 10, 100, 180, 190, 185];
console.log(solution(list));
