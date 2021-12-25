

n, m = map(int, input().split())


def solution(n, m):
    l = len(str(n))
    m = m * (10 ** l)
    return 'Yes' if prime(m + n) and prime(n) else 'No'


def prime(n):
    if n == 1:
        return False
    elif n == 2:
        return True
    for i in range(2, n):
        if n % i == 0:
            return False
    return True


print(solution(n, m))
