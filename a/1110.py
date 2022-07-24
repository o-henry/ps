n = int(input())
m = n
c = 0

while True:
    m = (m % 10 * 10) + (m % 10 + m // 10) % 10
    c += 1
    if m == n:
        break

print(c)
