A, B = map(int, input().split())


def solution(A, B):
    li = []

    for i in range(1, 46):
        li += [i] * i

    return sum(li[A - 1: B])


print(solution(A, B))
