const { count } = require('console');

main()

function main(){
    const fname = "/home/dycancel/advent-of-code-2020/3/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        let arr = data.toString().split("\n");
        console.log("Part 1: " + countTrees(arr, 3, 1) + "\n");
        let num = countTrees(arr, 1, 1) * countTrees(arr, 3, 1) * countTrees(arr, 5, 1) * countTrees(arr, 7, 1) * countTrees(arr, 1, 2);
        console.log("Part 2: " + num + "\n");
    });
}

function countTrees(data, slopeX, slopeY){
    let width = data[0].length, height = data.length; counter = 0;
    for (let x = 0, y = 0; y < height; x += slopeX, y += slopeY){
        if (data[y % height].substring(x % width, x % width + 1) == "#") counter++;
    }
    return counter;
}