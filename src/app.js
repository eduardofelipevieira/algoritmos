let app = {
    peakFindingLinear: function (set) {
        if(set.length === 1) {
            return set[0];
        }

        for(let i = 0; i < set.length; i++) {
            if(set[i] > set[i - 1] && set[i] > set[i + 1]) {
                return set[i];
            }
        }
    },
    peakFindingLogarithm: function (set, start, end) {
        let index = parseInt((start + end) / 2);

        if(index - 1 >= 0 && set[index] < set[index - 1]) {
            return app.peakFindingLogarithm(set, start, index - 1);
        } else if(index + 1 <= set.length - 1 && set[index] < set[index + 1]) {
            return app.peakFindingLogarithm(set, index + 1, end);
        } else {
            return set[index];
        }
    },
    insertionSort: function (list) {
        for(let i = 1; i < list.length; i++) {
            for(let j = i - 1; j >= 0; j--) {
                if(list[j + 1] < list[j]) {
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
    binarySearch: function (key, list, low, high) {
        let middle = parseInt((low + high) / 2);

        if(list[middle] === key) {
            return middle;
        }

        if(low > high) {
            return -1;    
        }
        
        if(list[middle] > key) {
            return app.binarySearch(key, list, 0, middle - 1);
        }
        
        if(list[middle] < key) {
            return app.binarySearch(key, list, middle, high - 1);
        }

        return -1;
    }
}

module.exports = app;