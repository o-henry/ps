import sys
sys.setrecursionlimit(10000)


def dfs(x, y):
    island[x][y] = 0
    for k in range(8):
        nx = x + dx[k]
        ny = y + dy[k]

        if 0 <= nx < h and 0 <= ny < w and island[nx][ny] == 1:
            dfs(nx, ny)


while True:
    w, h = map(int, input().split())

    if w == h == 0:
        break

    island = [list(map(int, input().split())) for _ in range(h)]

    dx = [-1, -1, -1, 0, 1, 1, 1, 0]
    dy = [-1, 0, 1, 1, 1, 0, -1, -1]

    ret = 0
    for i in range(h):
        for j in range(w):
            if island[i][j] == 1:
                dfs(i, j)
                ret += 1

    print(ret)
