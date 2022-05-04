"""
if x <- 0:
    E,W,S,N += 1

* 조건 모든 토마토가 익어야 한다.
* 그렇지 못할 경우 -1을 출력해야 한다.
* 0 기준 상하좌우에 -1이 모두 존재할경우 -1을 바로 출력하고 중단한다.
* 1을 먼저 찾는다.
"""
from collections import deque

N, M = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(M)]
days = [[0] * N for _ in range(M)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

q = deque()

for i in range(M):
    for j in range(N):
        if graph[i][j] == 1:
            q.append((i, j))


while q:
    x, y = q.popleft()

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if 0 <= nx < M and 0 <= ny < N and graph[nx][ny] == 0:
            graph[nx][ny] = 1
            days[nx][ny] = days[x][y] + 1
            q.append((nx, ny))


flag = True
for i in range(M):
    for j in range(N):
        if graph[i][j] == 0:
            flag = False

ret = 0
if flag:
    for i in range(M):
        for j in range(N):
            if days[i][j] > ret:
                ret = days[i][j]
    print(ret)
else:
    print(-1)
