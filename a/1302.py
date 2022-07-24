N = int(input())

book = dict()
ret = []

for _ in range(N):
    name = input()

    if name in book:
        book[name] += 1
    else:
        book[name] = 1

    max_val = max(book.values())

for k, v in book.items():
    if v == max_val:
        ret.append(k)

print(sorted(ret)[0])
