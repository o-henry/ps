function solution(list) {
  let answer = [];

  for (let number of list) {
    let tmp = "";

    while (number) {
      tmp += number % 10;
      number = Math.floor(number / 10);
    }
    trialDivision(answer, Number(tmp));
  }

  return answer;
}

function trialDivision(answer, number) {
  // Check if number is integer.
  if (number % 1 !== 0) {
    return false;
  }
  if (number <= 1) {
    // If number is less than one then it isn't prime by definition.
    return false;
  }
  if (number <= 3) {
    // All numbers from 2 to 3 are prime.
    answer.push(number);
  }
  // If the number is not divided by 2 then we may eliminate all further even dividers.
  if (number % 2 === 0) {
    return false;
  }
  // If there is no dividers up to square root of n then there is no higher dividers as well.
  const dividerLimit = Math.sqrt(number);
  for (let divider = 3; divider <= dividerLimit; divider += 2) {
    if (number % divider === 0) {
      return false;
    }
  }
  answer.push(number);
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 10]));
