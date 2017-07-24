const sorts = require('./sorts')

let searches = {
    // SEARCHES
    binarySearch: function (key, arr) {
        return search(key, arr, 0, arr.length)

        function search(key, arr, low, high) {
            let middle = parseInt((low + high) / 2)

            if (arr[middle] === key) {
                return middle
            }

            if (low > high) {
                return -1
            }

            if (arr[middle] > key) {
                return search(key, arr, 0, middle - 1)
            }

            if (arr[middle] < key) {
                return search(key, arr, middle, high - 1)
            }

            return -1
        }
    },
    linearSearch: function (key, arr) {
        let result = -1

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) {
                result = i

                break
            }
        }

        return result
    }
}

module.exports = searches