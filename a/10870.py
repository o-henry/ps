N = int(input())
fib = [0] * 21


def fibo(N):
    if fib[N] == 0:
        if N == 0:
            return 0
        if N == 1 or N == 2:
            fib[N] = 1
        else:
            fib[N] = fibo(N-1) + fibo(N-2)
        return fib[N]
    else:
        return fib[N]


print(fibo(N))
