function SavingPrincesses(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  let left = 0;

  while (left < k) {
    let shifted = queue.shift();
    queue.push(shifted);

    if (left + 1 === k) {
      queue.shift();
    }
    left++;
  }
  left = 0;

  console.log(queue);
  return answer;
}

let n = 8;
let k = 3;
console.log(SavingPrincesses(n, k)); // 7
