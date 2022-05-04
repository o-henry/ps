n = int(input())


def solution(n):

    h = {}

    for _ in range(n):
        m = list(map(int, input().split()))

        for x in m:
            if h[x] != 0:
                h[x] += 1
            else:
                h[x] = 0

    print(h)


print(solution(n))
