s, p = 0, 0
score = [int(input()) for _ in range(10)]

for _ in range(10):
    s += score[p]
    p += 1

    if s == 100:
        print(s)
        break
    elif s > 100:
        if 100 - (s - score[p - 1]) < s - 100:
            print(s - score[p - 1])
            break
        else:
            print(s)
            break
    else:
        if p == 10:
            print(s)


# m = []
# score = 0
# for i in range(10):
#     m.append(int(input()))
# for j in m:
#     score += j
#     if score >= 100:
#         if score - 100 > 100 - (score - j):
#             score -= j
#         break
# print(score)
