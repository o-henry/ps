
def DFS(L):
    global cnt
    # n, m = 3, 2
    if L == m:
        for j in range(m):
            print(res[j], end=' ')
        print()
        cnt+=1
    else:
        for i in range(1, n+1):
        # i = 1, 2, 3
            res[L]=i
            DFS(L+1)


if __name__ == "__main__":
    n, m = map(int, input().split())
    cnt = 0
    res=[0]*(m) # [0, 0]
    DFS(0)
    print(cnt)
