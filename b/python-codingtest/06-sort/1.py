# TODO: selection sort

li = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8]

for i in range(len(li)):
  minIdx = i
  for j in range(i+1, len(li)):
    if li[minIdx] > li[j]:
      minIdx = j

  li[i], li[minIdx] = li[minIdx], li[i]

print(li)