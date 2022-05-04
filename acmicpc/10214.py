T = int(input())

y, k = 0, 0
for _ in range(T):
    li = [list(map(int, input().split())) for _ in range(9)]

    for x in li:
        y += x[0]
        k += x[1]

    if y > k:
        print('Yonsei')
    elif y < k:
        print('Korea')
    else:
        print('Draw')
