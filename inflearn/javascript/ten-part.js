function solution(day, cars) {
  let number = 0;

  for (let x of cars) {
    // if ((x - day) % 10 === 0) number++;
    if (x % 10 === day) number++;
  }
  return number;
}

module.exports = solution;
