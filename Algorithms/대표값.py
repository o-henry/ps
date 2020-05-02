students = int(input())
scores = [65,73,66,87,92,67,55,79,75,80]
# withIdxScore = list(enumerate(scores))
# print(withIdxScore)

avg = round(sum(scores)/students)
min = 2147000000
score
for idx, x in enumerate(scores):
    tmp = abs(score - avg)
    if tmp<min:
        min=tmp
        score=x
        res=idx+1
    elif tmp==min:
        if x>score:
            score=x
            res=idx+1