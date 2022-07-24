# n, m = map(int, input().split())
# a = list(map(int, input().split()))
# b = list(map(int, input().split()))


# def solution(a, b):
#     return sum(a) - sum(b)


# print(solution(a, b))


n, m = map(int, input().split())
boxes = list(map(int, input().split()))
books = list(map(int, input().split()))

for book in books:
    for i in range(len(boxes)):
        if(book <= boxes[i]):
            boxes[i] -= book
            break
print(sum(boxes))
