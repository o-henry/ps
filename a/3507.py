n = int(input())


def solution(n):
    li = []
    i = 1
    m = n // 2

    if m > 100:
        return 0
    elif n - 2*m == 0:
        li.append([m, m])

    while m < 100:
        m += i

        if m < 100 and n - m < 100:
            li.append([m, n-m])
            li.append([n-m, m])
        else:
            break

    return len(li)


print(solution(n))

# print(sum([1 if N-i < 100 else 0 for i in range(100) ]))
# print(max(0, 199-n))
