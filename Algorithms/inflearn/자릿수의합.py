number = list(map(int, input().split()))
# 125, 15232, 97

max = -2147000000

def digit_sum(x):
    sum = 0
    while x > 0:
        sum += x % 10
        x = x // 10
    return sum

for i in number:
    total = digit_sum(i)
    if total > max:
        max = total
        res = i
print(i)
    