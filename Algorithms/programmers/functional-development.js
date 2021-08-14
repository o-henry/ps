function solution(p, s) {
  let answer = [0];
  let queue = [];
  let day = 0;

  for (let i = 0; i < p.length; i++) {
    while (p[i] < 100) {
      p[i] += s[i];
      day++;
    }
    queue.push(day);
    day = 0;
  }

  let max = queue[0];

  for (let j = 0, k = 0; j < queue.length; j++) {
    if (queue[j] <= max) {
      answer[k] += 1;
    } else {
      max = queue[j];
      answer[++k] = 1;
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
