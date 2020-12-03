function main() {
    const fname = "/home/dycancel/advent-of-code-2020/1/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;

        let report = data.toString().split("\n");
        let dict = {};
        report.forEach(function (num) {
            dict[num] = 1;
        })
        report.forEach(function (num) {
            let temp = 2020 - num;
            if (dict[temp]) {
                console.log("Num: " + num + ", temp: " + temp);
                console.log(temp * num);
            }
        });
    })
}

main();