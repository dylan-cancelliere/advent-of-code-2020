const { time } = require('console');

main()

function main() {
    const fname = "/home/spyro/advent-of-code-2020/13/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        console.log("Part 1: " + part1(data.toString().split("\n")) + "\n");
        console.log("Part 2: " + part2(data.toString().split("\n")) + "\n");
    });
}

function part1(data) {
    let target = data[0];
    data = data[1].split(",");
    let times = [];
    data.forEach(time => {
        if (time != "x") times.push(parseInt(time));
    });

    let min = Infinity, id;
    times.forEach(time => {
        let temp = time * (Math.ceil(target / time));
        if (temp < min) {
            min = temp;
            id = time;
        }
    });

    return id * (min - target);
}

function part2(data) {
    let times = [], timestamp, multiplier = 1, bool = true;
    data = data[1].split(",");
    data.forEach(time => {
        if (time == "x") times.push(time);
        else times.push(parseInt(time));
    })

    while (bool){
        timestamp = times[0] * multiplier;
        bool = false;
        for (let i = 1; i < times.length; i++){
            if (times[i] == "x") continue;
            else if ((timestamp + i) % times[i] != 0){
                bool = true;
                break;
            }
        }
        multiplier++;
    }
    return timestamp;
}