p, q = map(int, input().split())


def solution(p, q):
    li = []
    for i in range(1, p+1):
        if p % i == 0:
            li.append(i)

    if len(li) < q:
        return 0

    return li[q-1]


print(solution(p, q))


# a, b = map(int, input().split())
# c = [i for i in range(1, a+1) if a%i==0]
# print(0 if len(c)<b else c[b-1])
