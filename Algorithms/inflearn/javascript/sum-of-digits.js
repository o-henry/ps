/**
 * linear-serach
 * O(n)
 * @목표 : 배열의 각 요소의 자릿수의 합을 계산해야 한다.
 * 자릿수의 합을 구하기 위해서는 10으로 값을 나누는 과정을 반복한다.
 * 언제까지? 몫이 0이 될때까지
 * max 값을 위 자리수의 합으로 바꾸고
 * 가장 큰 값이 들어왔을 때의 숫자를 답으로 한다.
 */

function solution(list) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let number of list) {
    let sum = 0,
      tmp = number;

    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = number;
    } else if (sum === max) {
      if (number > answer) {
        answer = number;
      }
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
