# 소수 1과 자기자신으만 나누어지는 수

n = int(input())
l = list(map(int, input().split()))


def prime(n):
    if n == 1:
        return False
    elif n == 2:
        return True
    for i in range(2, n):
        if n % i == 0:
            return False
    return True


def solution():
    ret = 0
    for x in l:
        if prime(x):
            ret += 1
    return ret


print(solution())
