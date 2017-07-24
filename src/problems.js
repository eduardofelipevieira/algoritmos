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

        for(; i <= j; i++) {
            let currentCycle = cycleLength(i)

            if(currentCycle > max) {
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
    minesweeper: function(input) {
        let lines = input.split('\n')
        let output = ''
        let current = 0

        do {
            let line = lines[current].trim()
            
            let size = line.split(' '), height = size[0], width = size[1]
            

            current += height

            // console.log(line)
        } while(current < lines.length)

        return output
    }
}

module.exports = problems