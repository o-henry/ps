import sys

T = int(input())

for _ in range(T):
    n = int(input())
    numbers = sorted([sys.stdin.readline().strip() for _ in range(n)])
    f = True

    for i in range(n - 1):
        if numbers[i] == numbers[i+1][:len(numbers[i])]:
            f = False
            break

    if f:
        print('YES')
    else:
        print('NO')
