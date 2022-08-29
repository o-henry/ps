"""
1. 7, 10000, 2000, 11, 4000000
2. 16
3. O(N2)
"""

# 4.
def greatest_number(array):
    left = array[0]
    for i in range(1, array):
        is_i_val_the_greatest = True
        if array[i] > left:
            is_i_val_the_greatest = False                
        if is_i_val_the_greatest:
            return i