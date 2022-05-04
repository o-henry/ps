n = int(input())


def solution(n):

    for _ in range(n):
    
        m = int(input())
        li = []
        coin = [25, 10, 5, 1]

        for x in coin:
            li.append(m // x)
            m = m % x
    
        print(*li)


solution(n)
