main()

function main() {
    const fname = "/home/spyro/advent-of-code-2020/11/input.txt";
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
                let full = 0;
                // top left
                if (data[i-1] && data[i-1][j-1]){
                    if (data[i-1][j-1] == '#') full++;
                }
                // top middle
                if (data[i-1] && data[i-1][j]){
                    if (data[i-1][j] == '#') full++;
                }
                // top right
                if (data[i-1] && data[i-1][j+1]){
                    if (data[i-1][j+1] == '#') full++;
                }
                // middle right
                if (data[i] && data[i][j+1]){
                    if (data[i][j+1] == '#') full++;
                }
                // bottom right
                if (data[i+1] && data[i+1][j+1]){
                    if (data[i+1][j+1] == '#') full++;
                }
                // bottom middle
                if (data[i+1] && data[i+1][j]){
                    if (data[i+1][j] == '#') full++;
                }
                // bottom left
                if (data[i+1] && data[i+1][j-1]){
                    if (data[i+1][j-1] == '#') full++;
                }
                // middle left
                if (data[i] && data[i][j-1]){
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
    for (let i = 0; i < data.length; i++){
        data[i] = data[i].split('');
    }
    let bool = true;
    while (bool){
        bool = false;
        let dataCopy = JSON.parse(JSON.stringify(data));
        for (let i = 0; i < data.length; i++){
            for (let j = 0; j < data[i].length; j++){
                let full = 0;
                // top left
                for (let k = i, l = j; data[k-1] && data[k-1][l-1]; k--, l--){
                    if (data[k-1][l-1] == '#'){
                        full++;
                        break;
                    }
                    if (data[k-1][l-1] == 'L') break;
                }
                // top middle
                for (let k = i, l = j; data[k-1] && data[k-1][l]; k--){
                    if (data[k-1][l] == '#'){
                        full++;
                        break;
                    }
                    if (data[k-1][l] == 'L') break;
                }
                // top right
                for (let k = i, l = j; data[k-1] && data[k-1][l+1]; k--, l++){
                    if (data[k-1][l+1] == '#'){
                        full++;
                        break;
                    }
                    if (data[k-1][l+1] == 'L') break;
                }                
                // middle right
                for (let k = i, l = j; data[k] && data[k][l+1]; k, l++){
                    if (data[k][l+1] == '#'){
                        full++;
                        break;
                    }
                    if (data[k][l+1] == 'L') break;
                }
                // bottom right
                for (let k = i, l = j; data[k+1] && data[k+1][l+1]; k++, l++){
                    if (data[k+1][l+1] == '#'){
                        full++;
                        break;
                    }
                    if (data[k+1][l+1] == 'L') break;
                }
                // bottom middle
                for (let k = i, l = j; data[k+1] && data[k+1][l]; k++){
                    if (data[k+1][l] == '#'){
                        full++;
                        break;
                    }
                    if (data[k+1][l] == 'L') break;
                }
                // bottom left
                for (let k = i, l = j; data[k+1] && data[k+1][l-1]; k++, l--){
                    if (data[k+1][l-1] == '#'){
                        full++;
                        break;
                    }
                    if (data[k+1][l-1] == 'L') break;
                }
                // middle left
                for (let k = i, l = j; data[k] && data[k][l-1]; l--){
                    if (data[k][l-1] == '#'){
                        full++;
                        break;
                    }
                    if (data[k][l-1] == 'L') break;
                }
                if (data[i] && data[i][j] == 'L' && full === 0){
                    dataCopy[i][j] = '#';
                    bool = true;
                }
                if (data[i] && data[i][j] == '#' && full >= 5){
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