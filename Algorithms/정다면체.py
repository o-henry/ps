n, m = map(int, input().split())
# 리스트 만들기
cnt = [0]*(n+m+3)

for idx, i in enumerate(range(1, n+1)):
    for idx, j in enumerate(range(1, m+1)):
        print(i, j)