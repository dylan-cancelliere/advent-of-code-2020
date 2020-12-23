main()

function main() {
    const fname = "/home/spyro/advent-of-code-2020/12/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        console.log("Part 1: " + part1(data.toString().split("\n")) + "\n");
        console.log("Part 2: " + part2(data.toString().split("\n")) + "\n");
    });
}

function part1(data){
    let x = 0, y = 0, dir = 90;
    data.forEach(str => {
        let command = str.substring(0, 1);
        let num = parseInt(str.substring(1));

        switch (command){
            case "N":
                y += num;
                break;
            case "S":
                y -= num;
                break;
            case "E":
                x += num;
                break;
            case "W":
                x -= num;
                break;
            case "L":
                dir = (dir + 360 - num) % 360;
                break;
            case "R":
                dir = (dir + num) % 360;
                break;
            case "F":
                switch (dir){
                    case 0:
                        y += num;
                        break;
                    case 90:
                        x += num;
                        break;
                    case 180:
                        y -= num;
                        break;
                    case 270:
                        x -= num;
                        break;
                }
        }
    });
    return Math.abs(x) + Math.abs(y);
}

function part2(data){

}