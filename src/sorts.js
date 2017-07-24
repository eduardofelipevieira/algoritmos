let sorts = {
    insertionSort: function (arr) {
        for (let i = 1; i < arr.length; i++) {
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j + 1] < arr[j]) {
                    let aux = arr[j + 1]
                    arr[j + 1] = arr[j]
                    arr[j] = aux
                } else {
                    break
                }
            }
        }

        return arr
    },
    mergeSort: function (arr) {
        if (!arr) { return [] }
        if (arr && arr.length === 0) { return [] }

        let low = 0, high = arr.length - 1
        let middle = parseInt((low + high) / 2)

        sort(arr, low, middle)
        sort(arr, middle + 1, high)
        merge(arr, low, middle, high)

        return arr

        function sort(arr, low, high) {
            if (low < high && high < arr.length && arr.length != 0) {
                let middle = parseInt((low + high) / 2)

                sort(arr, low, middle)
                sort(arr, middle + 1, high)
                merge(arr, low, middle, high)
            }
        }

        function merge(arr, low, middle, high) {
            let aux = new Array(arr.length)

            for (let i = low; i <= high; i++) {
                aux[i] = arr[i]
            }

            let i = low, j = middle + 1, k = low

            while (i <= middle && j <= high) {
                if (aux[i] <= aux[j]) {
                    arr[k] = aux[i]
                    i++
                } else {
                    arr[k] = aux[j]
                    j++
                }
                k++
            }

            while (i <= middle) {
                arr[k] = aux[i]
                i++
                k++
            }
        }
    },
    selectionSort: function (arr) {
        let min

        for (let i = 0; i < arr.length - 1; i++) {
            min = i

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j
                }
            }

            if (arr[i] != arr[min]) {
                aux = arr[i]
                arr[i] = arr[min]
                arr[min] = aux
            }
        }

        return arr
    },
    bucketSort: function (arr, n) {
        let buckets = new Array(n)

        for (let i = 0; i < n; i++) {
            let bi = parseInt(n * arr[i])

            if (bi) {
                if (!buckets[bi]) {
                    buckets[bi] = new Array()
                }

                buckets[bi].push(arr[i])
            }
        }

        for (let i = 0; i < n; i++) {
            if (!buckets[i]) {
                buckets[i] = new Array()
            }

            if (buckets[i].length > 1) {
                sorts.mergeSort(buckets[i])
            }
        }

        let index = 0
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < buckets[i].length; j++) {
                arr[index++] = buckets[i][j]
            }
        }

        return arr
    }
}

module.exports = sorts