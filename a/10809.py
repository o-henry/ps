alphabet = 'abcdefghijklmnopqrstuvwxyz'
S = input()

for x in alphabet:
    if x in S:
        print(S.index(x), end=" ")
    else:
        print(-1, end=" ")


# s = input()
# alphabet = list(range(97, 123)) # 아스키코드 알파벳 소문자 범위

# for x in alphabet:
#     print(s.find(chr(x)), end=" ")
