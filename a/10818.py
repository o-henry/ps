N = int(input())
m = list(map(int, input().split()))


# def solution(N):
#     print(min(m), max(m))

def solution(N):
    min, max = m[0], m[0]
    
    for i in m:
        if i > max:
            max = i
        if i < min:
            min = i
    
    print(min, max)


solution(N)
