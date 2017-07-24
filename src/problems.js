let problems = {
    peakFinding: function (set) {
        return findPeak(set, 0, set.length - 1)

        function findPeak(set, start, end) {
            let index = parseInt((start + end) / 2)

            if (index - 1 >= 0 && set[index] < set[index - 1]) {
                return findPeak(set, start, index - 1)
            } else if (index + 1 <= set.length - 1 && set[index] < set[index + 1]) {
                return findPeak(set, index + 1, end)
            } else {
                return set[index]
            }
        }
    },
    countNegative: function (input) {
        // let count = 0

        // for(let i = 0; i < input.length; i++) {
        //     for(let j = input[i].length - 1; j >= 0; j--) {
        //         if(input[i][j] < 0) {
        //             count += j + 1

        //             break
        //         }
        //     }
        // }

        let count = 0, i = 0, j = input[i].length - 1

        while (i < input.length && j >= 0) {
            if (input[i][j] < 0) {
                count += j + 1
                i++
            } else {
                j--
            }
        }

        return count
    },
    problem3NPlus1: function (i, j) {
        let max = 0

        for (; i <= j; i++) {
            let currentCycle = cycleLength(i)

            if (currentCycle > max) {
                max = currentCycle
            }
        }

        return max;

        function cycleLength(n) {
            let count = 1

            while (n !== 1) {
                if (n % 2 === 0) {
                    n /= 2;
                } else {
                    n = n * 3 + 1;
                }

                count++
            }

            return count
        }
    },
    minesweeper: function (input) {
        let lines = input.split('\n')
        let output = ''
        let current = 0

        let line

        do {
            line = lines[current]

            let size = line.split(' ')

            let board = new Array(parseInt(size[0]))

            for (let i = 0; i < board.length; i++) {
                board[i] = [...lines[++current]]
            }

            output += generateOutput(board)

            // console.log(output)

            current++

            if (current !== lines.length - 1) {
                output += '\n'
            }
        } while (line !== '0 0')

        return output.trim()

        function generateOutput(board) {
            let output = ''
            let row = 0

            while (row < board.length) {
                for (let column = 0; column < board[row].length; column++) {
                    let field = board[row][column]
                    let resultField = field

                    if (field === '.') {
                        let count = countMinesAround(board, row, column)

                        resultField = count.toString()
                    } else if (Number.isInteger(field)) {
                        resultField = field
                    }

                    output += resultField
                }

                if (row !== (board.length - 1)) {
                    output += '\n'
                }

                row++
            }

            return output
        }

        function countMinesAround(board, row, column) {
            let count = 0

            // ex. r3, c3
            // checks
            // r2, c2
            // r2, c3
            // r2, c4
            // r3, c2
            // r3, c4
            // r4, c2
            // r4, c3
            // r4, c4

            let currentRow = board[row - 1]

            if (currentRow) {
                if (currentRow[column - 1] === '*') {
                    count++
                }

                if (currentRow[column] === '*') {
                    count++
                }

                if (currentRow[column + 1] === '*') {
                    count++
                }
            }

            currentRow = board[row]

            if (currentRow[column - 1] === '*') {
                count++
            }

            if (currentRow[column + 1] === '*') {
                count++
            }

            currentRow = board[row + 1]

            if (currentRow) {
                if (currentRow[column - 1] === '*') {
                    count++
                }

                if (currentRow[column] === '*') {
                    count++
                }

                if (currentRow[column + 1] === '*') {
                    count++
                }
            }

            return count
        }
    }
}

module.exports = problems