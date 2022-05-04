S = input()
ret = ''

for x in S:
    if x.islower():
        print(chr(97+(ord(x)+13-97) % 26), end='')
    elif x.isupper():
        print(chr(65+(ord(x)+13-65) % 26), end='')
    else:
        print(x, end='')
