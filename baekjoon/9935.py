import sys

W = sys.stdin.readline().rstrip()
B = sys.stdin.readline().rstrip()

while True:
    for x in B:
        W = W.replace(B, "")
    if len(W) == 0:
        print('FRULA')
        break

    break
if W:
    print(W)
