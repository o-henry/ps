M, N, K = map(int, input().split())
graph = [[0] * (N+1) for _ in range(M+2)]

sqaure = []

for _ in range(K):
    a, b, c, d = map(int, input().split())

    for i in range(a, c+1):
        for j in range(b, d+1):
            sqaure.append([i, j])

print(sqaure)
