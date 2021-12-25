def bf_match(txt: str, pat: str) -> int:
    p_t = 0  # txt(텍스트)를 따라가는 커서
    p_p = 0  # pat(패턴)를 따라가는 커서

    while p_t != len(txt) and p_p != len(pat):
        if txt[p_t] == pat[p_p]:
            p_t += 1
            p_p += 1
        else:
            p_t = p_t - p_p + 1
            p_p = 0
    return pt - pp if pp == len(pat) else -1


if __name__ == '__main__':
    s1 = input('텍스트를 입력하세요.: ')  # 텍스트용 문자열
    s2 = input('패턴을 입력하세요.: ')    # 패턴용 문자열

    idx = bf_match(s1, s2)  # 문자열 s1~s2를 브루트 포스법으로 검색

    if idx == -1:
        print('텍스트 안에 패턴이 존재하지 않습니다.')
    else:
        print(f'{(idx + 1)}번째 문자에서 일치합니다.')


"""
          0 1 2 3 4 5 6 7
text    = A B B A C A D C
pattern = A B C
pattern =   A B C
pattern =     A B C

"""
