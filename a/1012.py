import sys
sys.setrecursionlimit(10**6)
T = int(input())


"""
* 그래프를 순회하며 1을 만나면 DFS를 실행한다.
* 상하좌우에 1이 존재하는지 여부를 체크한다.
"""


def dfs(x, y):
    if x < 0 or x >= N or y < 0 or y >= M:
        return

    if graph[x][y] == 0:
        return

    graph[x][y] = 0

    dfs(x+1, y)
    dfs(x, y+1)
    dfs(x-1, y)
    dfs(x, y-1)


for _ in range(T):
    M, N, K = map(int, input().split())
    graph = [[0] * M for _ in range(N)]
    cnt = 0

    for _ in range(K):
        x, y = map(int, input().split())
        graph[y][x] = 1

    for i in range(N):  # 행
        for j in range(M):  # 열
            if graph[i][j] == 1:
                dfs(i, j)
                cnt += 1

    print(cnt)
