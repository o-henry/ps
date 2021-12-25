end = '.'

while True:
    T = input()
    if T == end:
        break

    flag = True
    stack = []

    for x in T:
        if x == '(' or x == '[':
            stack.append(x)
        elif x == ')':
            if stack and stack[-1] == '(':
                stack.pop()
                flag = True
            else:
                flag = False
                break
        elif x == ']':
            if stack and stack[-1] == '[':
                stack.pop()
                flag = True
            else:
                flag = False
                break

    if flag and len(stack) == 0:
        print('yes')
    else:
        print('no')
