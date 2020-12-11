main()

function main(){
    const fname = "/home/dycancel/advent-of-code-2020/6/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        console.log("Part 1: " + numQuestionsAnswered(data.toString().split("\n")) + "\n");
        //console.log("Part 2: " + "\n" + findMySeat(data.toString().split("\n")));
    });
}

function numQuestionsAnswered(data){
    let set = new Set();
    let count = 0;
    data.forEach(function(str){
        //  console.log(str);
        if (str == ''){
            count += set.size;
            set.clear();
        }
        [...str].forEach(c => set.add(c));
    });
    count += set.size;
    return count;
}