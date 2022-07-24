a, b = map(int, input().split())
n = list(map(int, input().split()))


def solution(a, b):
    for x in n:
        print(x - a * b, end=' ')


solution(a, b)
