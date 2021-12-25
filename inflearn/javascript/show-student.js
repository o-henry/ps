function solution(list) {
  let answer = 1,
    max = list[0];

  for (let i = 0; i < list.length; i++) {
    if (list[i] > max) {
      answer++;
      max = list[i];
    }
  }

  return answer;
}

let list = [130, 135, 148, 140, 145, 150, 150, 153];
// let list = [160, 135, 132, 10, 100, 180, 190, 185];
console.log(solution(list));
   