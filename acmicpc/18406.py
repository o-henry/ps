

n = list(input())

def solution(n):
    m = len(n) // 2
    L = n[:m]
    R = n[m:]
    
    return sum(map(int, L)) == sum(map(int, R)) and "LUCKY" or "READY"
    




print(solution(n))
