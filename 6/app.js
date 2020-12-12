main()

function main() {
    const fname = "/home/dycancel/advent-of-code-2020/6/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        console.log("Part 1: " + numQuestionsAnswered(data.toString().split("\n")) + "\n");
        console.log("Part 2: " + part2(data.toString().split("\n")) + "\n");
    });
}

function numQuestionsAnswered(data) {
    let set = new Set();
    let count = 0;
    data.forEach(function (str) {
        if (str == '') {
            count += set.size;
            set.clear();
        }
        [...str].forEach(c => set.add(c));
    });
    count += set.size;
    return count;
}

function part2(data) {
    let dict = {};
    let count = 0, i = 0;
    data.forEach(function (str) {
        if (str == '') {
            for (const [key, value] of Object.entries(dict)) {
                if (value == i) count++;
            }
            i = 0;
            dict = {};
        } else {
            i++;
            [...str].forEach(c => {
                if (dict[c]) dict[c] += 1;
                else dict[c] = 1;
            });
        }
    });
    for (const [key, value] of Object.entries(dict)) {
        if (value == i) count++;
    }
    return count;
}
