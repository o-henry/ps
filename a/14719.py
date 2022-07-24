H, W = map(int, input().split())
block = list(map(int, input().split()))


v = 0
lt, rt = 0, W - 1
lt_m, rt_m = block[lt], block[rt]

while lt < rt:
    lt_m, rt_m = max(block[lt], lt_m), max(block[rt], rt_m)

    if lt_m <= rt_m:
        v += lt_m - block[lt]
        lt += 1
    else:
        v += rt_m - block[rt]
        rt -= 1
print(v)
