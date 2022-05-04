N = int(input())
rope = sorted(list(int(input()) for _ in range(N)))

w = 0
while True:
    if w / len(rope) >= rope[0]:
        print(w)
        break
    else:
        w += 1
