/*
    mergeSort(A[], p, r) 
    {
        if(p<r) then {
            q <- |(p + r) / 2|;
            mergeSort(A, p, q);
            mergeSort(A, q+1, r);
            merge(A, q, p, r)
        }
    }

    merge(A[], p, q, r) 
    {
        i <- p; j <- q + 1; t <- 1;
        while(i <= q and j <= r) {
            if(A[i] <= A[j]) 
            then tmp[t++] = A[i++];
            else tmp[t++] = A[j++];
        }

        while(i<=q) 
            tmp[t++] = A[i++];
        while(j<=r) 
            tmp[t++] = A[j++];
        i <- p; t <- 1;
        while(i<=r) 
            A[i++] <- tmp[t++];
    }
*/

let A = [31, 3, 65, 73, 8, 11, 20, 29, 48, 15]; // 3, 8, 11, 15, 20, 29, 31, 48, 65, 73
let p = 0,
  r = A.length - 1;

function mergeSort(A, p, r) {
  if (p < r) {
    let mid = (p + r) / 2;
    mergeSort(A, p, mid);
    mergeSort(A, mid + 1, r);
    merge(A, p, mid, r);
  }
}

function merge(A, p, mid, r) {
  let tmp = Array.from({ length: A.length });
  let t = p,
    i = p,
    j = mid + 1;

  while (i <= mid && j <= r) {
    if (A[i] <= A[j]) {
      tmp[t++] = A[i++];
    } else {
      tmp[t++] = A[j++];
    }
  }

  while (i <= mid) {
    tmp[t++] = A[i++];
  }

  while (j <= r) {
    tmp[t++] = A[j++];
  }

  for (let i = p; i < t; i++) {
    A[i] = t[i];
  }
}

mergeSort(A, p, r);
