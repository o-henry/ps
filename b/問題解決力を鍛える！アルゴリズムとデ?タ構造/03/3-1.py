N, V = map(int, input().split())
A = list(map(int, input().split()))

def main():
    exist = [False] * N
    
    for i in range(N):
        if A[i] == V:
            exist[i] = True
    
    print(exist)
        
main()
