function selection_sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let lowest_number_index = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowest_number_index]) {
                lowest_number_index = j;
            }
        }

        if (lowest_number_index != i) {
            let temp = array[i];
            array[i] = array[lowest_number_index];
            array[lowest_number_index] = temp;
        }
    }

    return array;
}
