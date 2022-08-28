N = int(input())

def main(N):
    if N == 0: return 0
    return N + main(N -1)

print(main(N))