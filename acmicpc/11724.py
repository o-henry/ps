from collections import deque

N, M = map(int, input().split())
graph = [[0] * (N + 1) for _ in range(N + 1)]


for _ in range(M):
    x, y = map(int, input().split())
    graph[x][y] = graph[y][x] = 1

vtd = [0] * (N + 1)


def bfs(v):
    q = deque()
    q.append(v)

    while q:
        v = q.popleft()
        for x in graph[v]:
            if vtd[x] == 0:
                q.append(x)
                vtd[x] = 1


ret = 0
for i in range(1, N+1):
    if vtd[i] == 0:
        bfs(i)
        ret += 1
print(ret)
