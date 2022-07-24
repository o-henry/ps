n = input()

while n != '0':
    print('yes' if n == n[::-1] else 'no')
    n = input()
