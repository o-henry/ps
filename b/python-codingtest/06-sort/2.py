# TODO : insertion sort
li = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

for i in range(1, len(li)):
  for j in range(i, 0, -1):
    if li[j - 1] > li[j]:
      li[j], li[j - 1] = li[j - 1], li[j]
    else:
      break

print(li)
