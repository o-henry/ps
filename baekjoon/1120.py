from typing import get_origin


A, B = input().split()


if A in B:
    print(0)

n, m = len(A), len(B)
while n <= m:
    cnt = 0
