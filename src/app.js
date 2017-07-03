let app = {
    peakFindingLinear: function (set) {
        if (set.length === 1) {
            return set[0];
        }

        for (let i = 0; i < set.length; i++) {
            if (set[i] > set[i - 1] && set[i] > set[i + 1]) {
                return set[i];
            }
        }
    },
    peakFindingLogarithm: function (set) {
        return findPeak(set, 0, set.length - 1);

        function findPeak(set, start, end) {
            let index = parseInt((start + end) / 2);

            if (index - 1 >= 0 && set[index] < set[index - 1]) {
                return findPeak(set, start, index - 1);
            } else if (index + 1 <= set.length - 1 && set[index] < set[index + 1]) {
                return findPeak(set, index + 1, end);
            } else {
                return set[index];
            }
        }
    },
    insertionSort: function (list) {
        for (let i = 1; i < list.length; i++) {
            for (let j = i - 1; j >= 0; j--) {
                if (list[j + 1] < list[j]) {
                    let aux = list[j + 1];
                    list[j + 1] = list[j];
                    list[j] = aux;
                } else {
                    break;
                }
            }
        }

        return list;
    },
    mergeSort: function (list) {
        let low = 0, high = list.length - 1;
        let middle = parseInt((low + high) / 2);

        sort(list, low, middle);
        sort(list, middle + 1, high);
        merge(list, low, middle, high);

        return list;

        function sort(list, low, high) {
            if (low < high && high < list.length && list.length != 0) {
                let middle = parseInt((low + high) / 2);

                sort(list, low, middle);
                sort(list, middle + 1, high);
                merge(list, low, middle, high);
            }
        }

        function merge(list, low, middle, high) {
            let aux = new Array(list.length);

            for (let i = low; i <= high; i++) {
                aux[i] = list[i];
            }

            let i = low, j = middle + 1, k = low;

            while (i <= middle && j <= high) {
                if (aux[i] <= aux[j]) {
                    list[k] = aux[i];
                    i++;
                } else {
                    list[k] = aux[j];
                    j++;
                }
                k++;
            }

            while (i <= middle) {
                list[k] = aux[i];
                i++;
                k++;
            }
        }
    },
    binarySearch: function (key, list) {
        return search(key, list, 0, list.length);

        function search(key, list, low, high) {
            let middle = parseInt((low + high) / 2);

            if (list[middle] === key) {
                return middle;
            }

            if (low > high) {
                return -1;
            }

            if (list[middle] > key) {
                return search(key, list, 0, middle - 1);
            }

            if (list[middle] < key) {
                return search(key, list, middle, high - 1);
            }

            return -1;
        }
    }
}

module.exports = app;