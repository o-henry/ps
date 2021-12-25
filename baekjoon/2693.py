T = int(input())


def solution():
    for _ in range(T):
        n = list(map(int, input().split()))
        n.sort()
        print(n[-3])


solution()
