T = int(input())

for _ in range(T):
    words = list(input().split(" "))

    for x in words:
        x = x[::-1]
        print(x, end=" ")
