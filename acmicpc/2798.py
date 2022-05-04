N, M = map(int, input().split())
c = list(map(int, input().split()))


m = 0
for i in range(N):
    for j in range(i+1, N):
        for k in range(j+1, N):
            if m < c[i] + c[j] + c[k] <= M:
                m = c[i] + c[j] + c[k]
print(m)
