/*
insertionSort(A[], n) 
{
    for i <- 2 to n
        A[1 ... i]의 적합한 자리에 A[i] 삽입
} 

insertionSort(A[], n) 
{
    for i <- 2 to n {
        loc <- i - 1;
        newItem <- A[i];

        while (loc >= 1 and newItem < A[loc]) {
            A[loc + 1] <- A[loc];
            loc--;
        }
        A[loc + 1] <- newItem;
    }
}
*/
