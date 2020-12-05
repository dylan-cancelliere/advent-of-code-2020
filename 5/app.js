main()

function main(){
    const fname = "/home/dycancel/advent-of-code-2020/5/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        console.log("Part 1: " + findSeat(data.toString().split("\n")) + "\n");
        console.log("Part 2: " + "\n");
    });
}

function findSeat(data){
    let max = -1;
    data.forEach(function(str){
        let x1 = 0, x2 = 127, y1 = 0, y2 = 7;
        for (let i = 0; i < str.length; i++){
            let letter = str.substring(i, i+1);
            switch (letter){
                case "F":
                    x2 = Math.floor(x2 - (x2 - x1)/2);
                    break;
                case "B":
                    x1 = Math.ceil(x1 + (x2 - x1)/2);
                    break;
                case "L":
                    y2 = Math.floor(y2 - (y2 - y1)/2);
                    break;
                case "R":
                    y1 = Math.ceil(y1 + (y2 - y1)/2);
                    break;
            }
        }
        if (x1 * 8 + y1 > max) max = x1 * 8 + y1;
    });
    return max;
}