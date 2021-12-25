n = list(map(int, input().split()))


def solution(n):
    a = [1, 1, 2, 2, 2, 8]
    for i in range(6):
        print(a[i] - n[i], end=" ")


solution(n)
