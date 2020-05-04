words = list(map(str, input()))
array = [0]*(len(words))

for idx, i in enumerate(reversed(words)):
    array[idx] = i.lower()
    
join_array = "".join(array)
words = ''.join(words)
words = words.lower()

if join_array == words:
    print("Yes")
else:
    print("No")
