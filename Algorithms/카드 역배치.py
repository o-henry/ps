cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
section = [5, 10]


def reverse_card(x):
    x_reverse = x.reverse()
    return x

cards[section[0]:section[1]] = reverse_card(cards[section[0]:section[1]])
print(cards)
