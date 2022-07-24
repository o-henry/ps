import math

n = int(input())


def solution(n):
    if n % 10 != 0:
        print(-1)
    else:
        A = B = C = 0
        A = n // 300
        B = (n % 300) // 60
        C = (n % 300) % 60 // 10
        print(A, B, C)


solution(n)
