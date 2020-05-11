# dict
# 모든 접근 방법을 고려하기

a = input() # AbaAeCe
b = input() # baeeACA

str1 = dict()
str2 = dict()

for i in a:
    str1[i] = str1.get(i, 0) + 1

for j in b:
    str2[j] = str2.get(j, 0) + 1

for k in str1.keys():
    # print(k) # A b a e e c
    if k in str2.keys():
        if str1[k] != str2[k]:
            print('No')
            break
    else:
        print('No')
        break
else:
    print('Yes')
    