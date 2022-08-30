/*
1. O(N2)
2. O(N)
3. best-O(N) worst- O(N2)
4. O(N)
*/

function contain_x(string) {
    let found_x = false;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "X") {
            found_x = true;
            break;
        }
    }

    return found_x;
}
