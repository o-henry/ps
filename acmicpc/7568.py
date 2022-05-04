n = int(input())


def solution(n):
    # li = [list(map(int,input().split())) for _ in range(n)]

    li = []
    for _ in range(n):
        w, h = map(int, input().split())
        li.append((w, h))

    for i in li:
        rank = 1
        for j in li:
            if i[0] < j[0] and i[1] < j[1]:
                rank += 1
        print(rank, end=" ")


print(solution(n))
