main()

function main() {
    const fname = "/home/dycancel/advent-of-code-2020/8/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        console.log("Part 1: " + findLoop(data.toString().split("\n")) + "\n");
        //console.log("Part 2: " + part2(data.toString().split("\n")) + "\n");
    });
}

function findLoop(data){
    let commands = generateArray(data);
    let acc = 0, i = 0;
    let record = new Set();
    while (true){
        switch (commands[i][0]){
            case "acc":
                acc += parseInt(commands[i][1]);
                record.add(i++);
                break;
            case "jmp":
                record.add(i);
                i += parseInt(commands[i][1]);
                break;
            case "nop":
                record.add(i++);
                break;
        }
        if (record.has(i)) return acc;
    }
}

function generateArray(data){
    let commands = [];
    data.forEach(str => {
        commands.push(str.split(" "));
    });
    return commands;
}