N = int(input())
P = input().split()
L, R, U, D = -1, 1, -1, 1
x, y = 1, 1

#  R R R U D
for p in P:
  if p == "L" and y > 1:
    y += L
  elif p == "R" and y < N:
    y += R
  elif p == "U" and x > 1:
    x += U
  elif p == "D" and x < N:
    x += D

print(x, y)

