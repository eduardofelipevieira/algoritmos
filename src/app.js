let app = {
    // PROBLEMS
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

    // SORTS
    insertionSort: function (arr) {
        for (let i = 1; i < arr.length; i++) {
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j + 1] < arr[j]) {
                    let aux = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = aux;
                } else {
                    break;
                }
            }
        }

        return arr;
    },
    mergeSort: function (arr) {
        if (!arr) { return []; }
        if (arr && arr.length === 0) { return []; }

        let low = 0, high = arr.length - 1;
        let middle = parseInt((low + high) / 2);

        sort(arr, low, middle);
        sort(arr, middle + 1, high);
        merge(arr, low, middle, high);

        return arr;

        function sort(arr, low, high) {
            if (low < high && high < arr.length && arr.length != 0) {
                let middle = parseInt((low + high) / 2);

                sort(arr, low, middle);
                sort(arr, middle + 1, high);
                merge(arr, low, middle, high);
            }
        }

        function merge(arr, low, middle, high) {
            let aux = new Array(arr.length);

            for (let i = low; i <= high; i++) {
                aux[i] = arr[i];
            }

            let i = low, j = middle + 1, k = low;

            while (i <= middle && j <= high) {
                if (aux[i] <= aux[j]) {
                    arr[k] = aux[i];
                    i++;
                } else {
                    arr[k] = aux[j];
                    j++;
                }
                k++;
            }

            while (i <= middle) {
                arr[k] = aux[i];
                i++;
                k++;
            }
        }
    },
    selectionSort: function (arr) {
        let min;

        for (let i = 0; i < arr.length - 1; i++) {
            min = i;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }

            if (arr[i] != arr[min]) {
                aux = arr[i];
                arr[i] = arr[min];
                arr[min] = aux;
            }
        }

        return arr;
    },
    bucketSort: function (arr, n) {
        let buckets = new Array(n);

        for (let i = 0; i < n; i++) {
            let bi = parseInt(n * arr[i]);
            
            if (bi) {
                if (!buckets[bi]) {
                    buckets[bi] = new Array();
                }

                buckets[bi].push(arr[i]);
            }
        }

        for (let i = 0; i < n; i++) {
            if (!buckets[i]) {
                buckets[i] = new Array();
            }

            if(buckets[i].length > 1) {
                app.mergeSort(buckets[i]);
            }
        }

        let index = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < buckets[i].length; j++) {
                arr[index++] = buckets[i][j];
            }
        }

        return arr;
    },

    // SEARCHES
    binarySearch: function (key, arr) {
        return search(key, arr, 0, arr.length);

        function search(key, arr, low, high) {
            let middle = parseInt((low + high) / 2);

            if (arr[middle] === key) {
                return middle;
            }

            if (low > high) {
                return -1;
            }

            if (arr[middle] > key) {
                return search(key, arr, 0, middle - 1);
            }

            if (arr[middle] < key) {
                return search(key, arr, middle, high - 1);
            }

            return -1;
        }
    },
    linearSearch: function (key, arr) {
        let result = -1;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === key) {
                result = i;

                break;
            }
        }

        return result;
    },

    // STRUCTURES
    LinkedList: function () {
        function Node(data) {
            this.data = data;
            this.next = null;
        }

        this.length = 0;
        this.head = null;

        this.add = function (value) {
            let node = new Node(value),
                currentNode = this.head;

            if (!currentNode) {
                this.head = node;
                this.length++;

                return node;
            }

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;

            this.length++;

            return node;
        };

        this.get = function (position) {
            let currentNode = this.head,
                length = this.length,
                count = 1,
                message = { failure: 'Failure: non-existent node in this list.' };

            if (length === 0 || position < 1 || position > length) {
                throw new Error(message.failure);
            }

            while (count < position) {
                currentNode = currentNode.next;
                count++;
            }

            return currentNode;
        };

        this.remove = function (position) {
            let currentNode = this.head,
                length = this.length,
                count = 0,
                message = { failure: 'Failure: non-existent node in this list.' },
                beforeNodeToDelete = null,
                nodeToDelete = null,
                deletedNode = null;

            if (position < 0 || position > length) {
                throw new Error(message.failure);
            }

            if (position === 1) {
                this.head = currentNode.next;
                deletedNode = currentNode;
                currentNode = null;
                this.length--;

                return deletedNode;
            }

            while (count < position) {
                beforeNodeToDelete = currentNode;
                nodeToDelete = currentNode.next;
                count++;
            }

            beforeNodeToDelete.next = nodeToDelete.next;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
            this.length--;

            return deletedNode;
        };
    }
}

module.exports = app;