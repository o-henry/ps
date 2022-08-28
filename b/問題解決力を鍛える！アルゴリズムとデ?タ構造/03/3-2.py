N, V = map(int, input().split())
A = list(map(int, input().split()))

def main():
    found_id = -1
    
    for i in range(N):
        if A[i] == V:
            found_id = i
            break
    print(found_id)
        
main()
