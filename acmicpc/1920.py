N = int(input())
A = sorted(list(map(int, input().split())))
M = int(input())
T = list(map(int, input().split()))

"""
T 안의 값이 A에 존재하는지 찾는 문제
"""


def binary(t):
    lt, rt = 0, N - 1

    while lt <= rt:
        m = (lt + rt) // 2

        if A[m] == t:
            return True
        elif A[m] > t:
            rt = m - 1
        elif A[m] < t:
            lt = m + 1


for i in range(M):
    if binary(T[i]):
        print(1)
    else:
        print(0)
