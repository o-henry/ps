h, w = map(int, input().split())
rec = [list(input()) for _ in range(h)]


def solution(h, w):
    m = min(h, w)  # 최대
    flag = 0

    for i in range(h):
        for j in range(w):
            for k in range(m):
                if i + k < h and j+k < w:
                    if rec[i][j] == rec[i][j+k] and rec[i][j] == rec[i+k][j] and rec[i][j] == rec[i+k][j+k]:
                        if flag < k:
                            flag = k

    return (flag + 1) * (flag + 1)


print(solution(h, w))
