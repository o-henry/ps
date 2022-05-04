n = input()


def solution(n):
    m = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

    for i in m:
        n = n.replace(i, '*')

    return len(n)


print(solution(n))
