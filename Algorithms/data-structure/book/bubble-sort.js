/*
bubbleSort(A[], n) 
{
    for last <- n downto 2 {
        sorted <- TRUE;
        for i <- 1 to last-1 {
            if(A[i] > A[i+1]) then {
                A[i] <-> A[i+1];
                sorted <- false;
            }
        }
        if(sorted = TRUE) then return;
    }
}
*/
