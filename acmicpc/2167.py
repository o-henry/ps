import sys
input = sys.stdin.readline

N, M = map(int, input().split())
li = [list(map(int, input().split())) for _ in range(N)]
K = int(input())


for _ in range(K):
    i, j, x, y = map(int, input().split())
    ret = 0

    for a in range(i - 1, x):
        for b in range(j - 1, y):
            ret += li[a][b]

    print(ret)
