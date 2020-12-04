main()

function main(){
    const fname = "/home/dycancel/advent-of-code-2020/4/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        console.log("Part 1: " + checkPassport(data.toString().split("\n")) + "\n");
        console.log("Part 2: " + "\n");
    });
}

function checkPassport(data){
    let count = 0;
    for (let i = 0; i < data.length; i++){
        let set = new Set();
        while (i < data.length){
            if (data[i] == '') break;

            data[i].split(" ").forEach(function(pair){
                set.add(pair.split(":")[0]);
            });
            i++;
        }
        if (set.size == 8 || (set.size == 7 && !set.has("cid"))) count++;
    }
    return count;
}