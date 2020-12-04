main();

function main(){
    const fname = "/home/dycancel/advent-of-code-2020/2/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;

        let arr = data.toString().split("\n");
        console.log("Part 1: " + numValidPasswords(arr) + "\n");
    });
}

function numValidPasswords(data){
    let counter = 0;
    data.forEach(function(str){
        str = str.split(" ");
        
        let minMax = str[0].split("-");
        let min = minMax[0];
        let max = minMax[1];

        let letter = str[1].substring(0, 1);
        let num = str[2].split(letter).length - 1;
        if (num >= min && num <= max) counter++;
    })
    return counter;
}