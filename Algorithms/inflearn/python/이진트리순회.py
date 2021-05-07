def DFS(L):
    if L > 7:
        return
    else:
        print(L, end=' ')
        DFS(L*2)
        DFS(L*2+1)


if __name__ == "__main__":
    DFS(1)