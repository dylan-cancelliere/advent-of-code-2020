const { debugPort } = require('process');

main()

function main() {
    const fname = "/home/dycancel/advent-of-code-2020/10/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        console.log("Part 1: " + part1(data.toString().split("\n")) + "\n");
        console.log("Part 2: " + part2(data.toString().split("\n")) + "\n");
    });
}

function buildAdapters(data) {
    let adapters = new Set();
    data.forEach(num => {
        adapters.add(parseInt(num));
    })
    return adapters;
}

function part1(data) {
    let adapters = buildAdapters(data);
    let num1 = 0, num3 = 0, val = 0;
    while (true) {
        if (adapters.has(val + 1)) {
            val++;
            num1++;
        } else if (adapters.has(val + 2)) {
            val += 2;
        } else if (adapters.has(val + 3)) {
            val += 3;
            num3++;
        } else {
            return num1 * (num3 + 1);
        }
    }
}

let _data, memoize;

function recursiveCounter(i){
    if (i == _data.length - 1) return 1;
    if (memoize.hasOwnProperty(i)) return memoize[i];
    let counter = 0;
    for (let j = i + 1; j < _data.length; j++){
        if (_data[j] - _data[i] <= 3) counter += recursiveCounter(j);
    }
    memoize[i] = counter;
    return counter;
}

function part2(data) {
    _data = ['0'];
    _data = _data.concat(data);
    _data = _data.sort((x, y) => x - y);
    console.log(_data);
    memoize = {};
    return recursiveCounter(0);
}