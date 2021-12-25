n = int(input())
m = list(map(int, input().split()))


def solution(n, m):
    avg = round(sum(m) / n)
    min = 2147000000
    for idx, x in enumerate(m):
        d = abs(x - avg)
        if d < min:
            min = d
            s = x
            res = idx + 1
        elif d == min:
            if x > s:
                s = x
                res = idx + 1

    return (avg, res)


print(solution(n, m))
