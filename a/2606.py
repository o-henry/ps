N = int(input())
M = int(input())

graph = [[0] * (N + 1) for _ in range(N + 1)]
vtd = [0] * (N + 1)

"""
1. 그래프 생성 (인접행렬)
2. DFS

"""


cnt = 0


def dfs(v):
    global cnt
    vtd[v] = 1
    for i in range(1, N+1):
        if vtd[i] == 0 and graph[v][i] == 1:
            dfs(i)
            cnt += 1


def solution():
    for _ in range(M):
        a, b = map(int, input().split())
        # 그래프 생성
        graph[a][b] = graph[b][a] = 1

    # 1부터 시작
    dfs(1)

    return cnt


print(solution())
