n = int(input())


def solution(n):
    for _ in range(n):
        w = input().lower()
        print('Yes' if w == w[::-1] else 'No')


solution(n)
