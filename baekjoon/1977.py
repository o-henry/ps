M = int(input())
N = int(input())

num = []
i = 1

while i ** 2 <= N:
    if M <= i ** 2 <= N:
        num.append(i ** 2)
    i += 1

if num == []:
    print(-1)
else:
    print(sum(num), num[0], sep="\n")
