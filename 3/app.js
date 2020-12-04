main()

function main(){
    const fname = "/home/dycancel/advent-of-code-2020/3/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        let arr = data.toString().split("\n");
        console.log("Part 1: " + countTrees(arr) + "\n");
    });
}

function countTrees(data){
    let width = data[0].length, counter = 0;
    for (let x = 0, y = 0; y < data.length; x += 3, y++){
        if (data[y].substring(x % width, x % width + 1) == "#") counter++;
    }
    return counter;
}