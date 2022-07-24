X, Y = map(str, input().split())


def Rev(n):
    x = ''
    for a in reversed(range(len(n))):
        x += n[a]
    return x


print(int(Rev(str(int(Rev(X)) + int(Rev(Y))))))

# def Rev(n):
#     return int(str(n)[::-1])

# n1, n2 = map(int, input().split())
# print(Rev(Rev(n1) + Rev(n2)))
