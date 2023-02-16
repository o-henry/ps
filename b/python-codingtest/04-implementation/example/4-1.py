N = int(input())
A = input().split()
x, y = 1, 1

T = ['L', 'R', 'U', 'D']
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

for r in A:  # R R R U D D
  for i in range(len(T)):
    if r == T[i]:
      nx = x + dx[i]
      ny = y + dy[i]

      if nx < 1 or ny < 1 or nx > N or ny > N:
        continue

      x, y = nx, ny

print(x, y)
