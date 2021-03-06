const { parse } = require('path');

main()

function main() {
    const fname = "/home/dycancel/advent-of-code-2020/9/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        console.log("Part 1: " + part1(data.toString().split("\n")) + "\n");
        console.log("Part 2: " + part2(data.toString().split("\n")) + "\n");
    });
}

function part1(data){
    let valid = [];
    let i;
    for (i = 0; i < 25; i++){
        valid[i] = parseInt(data[i]);
    }
    for (;i < data.length; i++){
        let x = parseInt(data[i]), bool = false;
        for (let j = 0; j < valid.length; j++){
            for (let k = j+1; k < valid.length; k++){
                if (parseInt(valid[j]) + parseInt(valid[k]) == x) bool = true;
            }
        }
        if (bool === false) return x;
        valid.shift();
        valid.push(x);
    }
    return "None found";
}

function part2(data){
    let target = 466456641, counter, min, max;
    for (let i = 0; i < data.length; i++){
        counter = 0, min = parseInt(data[i]), max = 0;
        for (let j = i; j < data.length; j++){
            counter += parseInt(data[j]);
            if (parseInt(data[j]) > max) max = parseInt(data[j]);
            if (parseInt(data[j]) < min) min = parseInt(data[j]);
            if (counter == target) {
                return min + max;
            }
            if (counter > target) break;
        }
    }
}