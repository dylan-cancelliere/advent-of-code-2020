function main() {
    const fname = "/home/dycancel/advent-of-code-2020/1/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;

        let report = data.toString().split("\n");
        let dict = {};
        report.forEach(function (num) {
            dict[num] = 1;
        })
        console.log("Part 1: " + twoNums(dict, report) + "\n");
        console.log("Part 2: " + threeNums(report) + "\n");
    })
}

function threeNums(report) {
    for (let i = 0; i < report.length; i++) {
        let num1 = parseInt(report[i]);
        for (let j = i + 1; j < report.length; j++) {
            let num2 = parseInt(report[j]);
            if (num2 + num1 > 2020) continue;
            for (let k = j + 1; k < report.length; k++) {
                let num3 = parseInt(report[k]);
                if (num1 + num2 + num3 == 2020) return num1 * num2 * num3;
            }
        }
    }
}

function twoNums(dict, report) {
    for (let i = 0; i < report.length; i++) {
        let num = report[i];
        let temp = 2020 - num;
        if (dict[temp]) {
            return temp * num;
        }
    }

}

main();