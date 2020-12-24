main()

function main() {
    const fname = "/home/spyro/advent-of-code-2020/14/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        console.log("Part 1: " + part1(data.toString().split("\n")) + "\n");
        console.log("Part 2: " + part2(data.toString().split("\n")) + "\n");
    });
}

function part1(data){
    let mask, mem = [], sum = 0, index, val;
    data.forEach(str => {
        str = str.split(" ");
        if (str[0] == "mask"){
            mask = str[2];
        }else{
            index = str[0].substring(4, str[0].length - 1);
            val = parseInt(str[2]).toString(2);
            let i, j, temp = '';
            for (i = mask.length - 1, j = val.length - 1; i >= 0 && j >= 0; i--, j--){
                if (mask[i] == 'X'){
                    temp = val[j] + temp;
                }else{
                    temp = mask[i] + temp;
                }
            }
            for (;i >= 0; i--){
                if (mask[i] == 'X'){
                    temp = '0' + temp;
                }else{
                    temp = mask[i] + temp;
                }
            }
            mem[index] = parseInt(temp, 2);
        }
    });
    mem.forEach(num => {
        sum += num;
    })
    return sum;
}

function part2(data){

}