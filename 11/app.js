main()

function main() {
    const fname = "/home/dycancel/advent-of-code-2020/11/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        console.log("Part 1: " + part1(data.toString().split("\n")) + "\n");
        console.log("Part 2: " + part2(data.toString().split("\n")) + "\n");
    });
}

function part1(data){
    for (let i = 0; i < data.length; i++){
        data[i] = data[i].split('');
    }
    let bool = true;
    while (bool){
        bool = false;
        let dataCopy = JSON.parse(JSON.stringify(data));
        for (let i = 0; i < data.length; i++){
            for (let j = 0; j < data[i].length; j++){
                let full = 0, empty = 0;
                // top left
                if (data[i-1] && data[i-1][j-1]){
                    if (data[i-1][j-1] == 'L') empty++;
                    if (data[i-1][j-1] == '#') full++;
                }
                // top middle
                if (data[i-1] && data[i-1][j]){
                    if (data[i-1][j] == 'L') empty++;
                    if (data[i-1][j] == '#') full++;
                }
                // top right
                if (data[i-1] && data[i-1][j+1]){
                    if (data[i-1][j+1] == 'L') empty++;
                    if (data[i-1][j+1] == '#') full++;
                }
                // middle right
                if (data[i] && data[i][j+1]){
                    if (data[i][j+1] == 'L') empty++;
                    if (data[i][j+1] == '#') full++;
                }
                // bottom right
                if (data[i+1] && data[i+1][j+1]){
                    if (data[i+1][j+1] == 'L') empty++;
                    if (data[i+1][j+1] == '#') full++;
                }
                // bottom middle
                if (data[i+1] && data[i+1][j]){
                    if (data[i+1][j] == 'L') empty++;
                    if (data[i+1][j] == '#') full++;
                }
                // bottom left
                if (data[i+1] && data[i+1][j-1]){
                    if (data[i+1][j-1] == 'L') empty++;
                    if (data[i+1][j-1] == '#') full++;
                }
                // middle left
                if (data[i] && data[i][j-1]){
                    if (data[i][j-1] == 'L') empty++;
                    if (data[i][j-1] == '#') full++;
                }
                if (data[i] && data[i][j] == 'L' && full === 0){
                    dataCopy[i][j] = '#';
                    bool = true;
                }
                if (data[i] && data[i][j] == '#' && full >= 4) {
                    bool = true;
                    dataCopy[i][j] = 'L';
                }
            }
        }
        data = JSON.parse(JSON.stringify(dataCopy));
    }
    let counter = 0;
    for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data[i].length; j++){
            if (data[i][j] == '#') counter++;
        }
    }
    return counter;
}

function part2(data){

}