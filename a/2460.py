

def solution():
    max = -10000
    sum = 0

    for _ in range(10):
        n, m = map(int, input().split())

        sum += m - n

        if sum > max:
            max = sum

    return max


print(solution())
