N = int(input())

def main(N):
    
    print(f"main({N}) 호출함")
    
    if N == 0: return 0
    
    result = N + main(N - 1)
    print(f"{N}까지의 합 {result}")
    
    return result
    
    
main(N)
    