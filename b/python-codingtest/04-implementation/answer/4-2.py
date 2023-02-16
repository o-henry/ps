N = int(input())
cnt = 0

for x in range(N + 1):
  for y in range(60):
    for z in range(60):
      if '3' in str(x) + str(y) + str(z):
        cnt += 1

print(cnt)
