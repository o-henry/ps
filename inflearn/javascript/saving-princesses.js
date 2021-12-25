function SavingPrincesses(n, k) {
  let answer = 0;
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) return (answer = queue.shift());
  }

  return answer;
}

let n = 8,
  k = 3;
console.log(SavingPrincesses(n, k));
