from itertools import combinations


def solution():
    li = [int(input()) for _ in range(9)]
    c = list(combinations(li, 7))

    # for x in c:
    #     if sum(x) == 100:
    #         x = sorted(list(x))
    #         for a in x:
    #             print(a)

    #         break
    for i in c:
        if sum(i) == 100:
            print(*sorted(i), sep='\n')
            break


solution()


# li = [int(input()) for _ in range(9)]
# sum = sum(li)
# li.sort()
# k = 0
# for i in li:
#     for j in li:
#         if i != j and k!=1:
#             if sum-i-j == 100:
#                 li.remove(i)
#                 li.remove(j)
#                 k+=1
# for i in li:
#     print(i)
