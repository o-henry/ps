# bubble sort
"""
버블의 위치를 지정하는 알고리즘
O(N2) 느린 정렬이다.
SWAP 을 사용한다.
"""
def bubble_sort(list):
    unsorted_until_index = len(list) - 1
    sorted = False
    
    while not sorted:
        sorted = True
        for i in range(unsorted_until_index):
            if list[i] > list[i+1]:
                list[i], list[i+1] = list[i+1], list[i]
                sorted = False
        unsorted_until_index -= 1
    return list
    
print(bubble_sort([65,55,45,35,25,15,10]))
 