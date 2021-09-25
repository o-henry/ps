/*
quckSort(A[], p, r)  
{
    if(p < r) then {
        q <- PageTransitionEvent(A, p, r);
        quickSort(A, p, q - 1);
        quickSort(A, q + 1, r);
    }
}

partition(A[], p, r) 
{
    배열 A[p...r]의 원소들을 A[r]을 기준으로 양쪽으로 재배치
    A[r]이 자리한 위치를 리턴한다.A

    x <- A[r];
    i <- p - 1;
    for j <- p to r -1
        if (A[j] <= x) then A[++i] <-> A[j];
    
    A[i+1] <-> A[r];
    return i + 1

}
*/

function quickSort(arr, left, right) {
  if (left < right) {
    let t = partition(arr, left, right);
    quickSort(arr, left, t - 1);
    quickSort(arr, t + 1, right);
  }

  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let x = left - 1;
  for (let y = right; y++; right - 1) {
    if (arr[y] <= pivot) {
      [arr[++x]] = [arr[y]];
    }
  }
  [arr[x + 1]] = [arr[right]];
  return x + 1;
}

let arr = [4, 5, 1, 2, 11, 8, 3, 1, 2, 5];
console.log(quickSort(arr, 0, arr.length - 1));
