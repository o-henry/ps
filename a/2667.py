from typing import List


n = int(input())
graph = [list(map(int, input())) for _ in range(n)]


dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

l = []
L = 0


def dfs(x, y):
    global L
    graph[x][y] = 0
    L += 1
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if 0 <= nx < n and 0 <= ny < n and graph[nx][ny] == 1:
            dfs(nx, ny)


def solution():
    ret = 0
    global L
    for i in range(n):
        for j in range(n):
            if graph[i][j] == 1:
                dfs(i, j)
                l.append(L)
                ret += 1
                L = 0

    print(ret, *sorted(l), sep="\n")


solution()
