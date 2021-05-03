def reorderLogFiles(logs):
    letters, digits = [], []
    for log in logs:
        if log.split()[1].isdigit():
            # log를 통으로 넣는다.
            digits.append(log)
        else:
            letters.append(log)

    letters.sort(key=lambda x: (x.split()[1:], x.split()[0]))

    print(letters + digits)
    return letters + digits


logs = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6",
        "let2 own kit dig", "let3 art zero"]
reorderLogFiles(logs)

# 람다표현식
# https://leetcode.com/problems/reorder-data-in-log-files/discuss/779319/Python-Custom-Sort-Solution-With-Explanation
