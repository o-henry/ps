function getNumber(str) {
  let takeNum = "";
  let answer = 0;
  for (let i = 0; i < str.length; i++) {
    if (Number.isInteger(Number(str[i]))) {
      takeNum += str[i];
    }
  }
  takeNum = Number("" + Math.floor(takeNum / 10) + (takeNum % 10));
  for (let i = 0; i <= takeNum; i++) {
    if (takeNum % i == 0) {
      answer++;
    }
  }
  console.log(answer);
  return answer;
}

getNumber("g0en2Ts8eSoft");
