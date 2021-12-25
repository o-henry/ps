k = int(input())


def solution(k):
    li = []

    for _ in range(k):
        n = int(input())
        li.append(n) if n != 0 else li.pop()

    return sum(li)


print(solution(k))
