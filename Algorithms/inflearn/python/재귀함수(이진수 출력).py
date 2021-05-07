def DFS(L):
    global res
    if L == 0:
        return
    else:
        DFS(L//2)
        print(L % 2, end=' ')
if __name__ == "__main__":
    n = int(input())
    DFS(n)