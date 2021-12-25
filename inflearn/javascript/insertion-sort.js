function solution(arr) {
  n = arr.length;

  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let curr = arr[i];

    while (j > 0 && arr[j - 1] > curr) {
      arr[j] = arr[j - 1]; // re-assign
      j -= 1;
    }

    arr[j] = curr;
  }

  console.log(arr);
}

solution([6, 4, 3, 7, 1, 9, 8]);
