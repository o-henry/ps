N = int(input())
A = sorted(list(map(int, input().split())))
B = sorted(list(map(int, input().split())), reverse=True)


ret = 0
for i in range(N):
    ret += A[i]*B[i]

print(ret)
