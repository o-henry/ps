def bubble_sort(list):
    # 정렬 완료된 bubble이 마지막에 위치한다.

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


print(bubble_sort([2, 4, 1, 3, 7]))
