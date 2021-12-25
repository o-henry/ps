function selectionSort(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let min = Math.min(arr);
    answer.push(min);
    arr.splice(min);
  }
  console.log(answer);

  return answer;
}

selectionSort([13, 5, 11, 7, 23, 15]);
