from collections import deque

N, M, V = map(int, input().split())

g = [[0] * (N + 1) for _ in range(N + 1)]
vtd = [0] * (N + 1)


def dfs(v):
    vtd[v] = 1
    print(v, end=" ")
    for i in range(1, N+1):
        if vtd[i] == 0 and g[v][i] == 1:
            dfs(i)


def bfs(v):
    q = deque()
    q.append(v)
    vtd[v] = 1

    while q:
        v = q.popleft()
        print(v, end=' ')
        for i in range(1, N+1):
            if g[v][i] == 1 and vtd[i] == 0:
                q.append(i)
                vtd[i] = 1


for _ in range(M):
    x, y = map(int, input().split())
    g[x][y] = g[y][x] = 1

dfs(V)
vtd = [0] * (N + 1)
print()
bfs(V)
