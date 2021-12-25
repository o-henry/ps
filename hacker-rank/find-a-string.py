''' 
ABCDCDC 중 CDC의 횟수를 계산해주세요 
일반적 loop는
A
AB
ABC
ABCD
...
ABCDCDC

문제의 요구사항을 해결하기 위해서는
sub_string(CDC)의 개수 만큼 비교하여 같다면 개수를 return

ABC
BCD
CDC
DCD
CDC
'''

def count_substring(string, sub_string):
    answer = 0
    for i in range(len(string)):
        if string[i:len(sub_string) + i] == sub_string:
            answer += 1
    return answer