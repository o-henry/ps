N = int(input())


def factorial(N):
    ret = 1
    if N > 0:
        ret = N * factorial(N - 1)
    return ret


print(factorial(N))
