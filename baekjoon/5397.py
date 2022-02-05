"""

<<BP<A>>Cd- => BAPC
BPACd
<<<>>-

1. '<', '>' 앞, 뒤 의 알파벳 판별
2. '-' 앞에 알파벳일 경우 제거
"""

L = int(input())


for _ in range(L):
    p = 0
    ret = [0 for _ in range(1000000)]
    pwd = input()

    for x in pwd:
        if x.isalpha():
            ret[p] = x
            p += 1
        elif x == '<' and len(ret):
            p -= 1
        elif x == '>' and p <= len(ret):
            p += 1
        elif x == '-':
            ret.pop()

    print(ret)
    # else:
    #     if x == '<' and len(ret):
    #         p -= 1
    #     elif x.isalpha():
    #         ret[p] = x

    #     elif x == '>' and len(ret):
    #         p += 1
