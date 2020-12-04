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
                let field = pair.split(":")[0];
                let val = pair.split(":")[1];
                let pattern, num, temp;
                switch (field){
                    case "byr":
                        if (isNaN(val)) break;
                        val = parseInt(val);
                        if (val >= 1920 && val <= 2002) set.add(field);
                        break;
                    case "iyr":
                        if (isNaN(val)) break;
                        val = parseInt(val);
                        if (val >= 2010 && val <= 2020) set.add(field);
                        break;
                    case "eyr":
                        if (isNaN(val)) break;
                        val = parseInt(val);
                        if (val >= 2020 && val <= 2030) set.add(field);
                        break;
                    case "hgt":
                        pattern = /[0-9]+(cm|in)/g;
                        temp = pattern.exec(val)
                        if (temp != null && temp[0] == val){
                            if (val.substring(val.length - 2, val.length) == "cm"){
                                num = parseInt(val.substring(0, val.length - 2));
                                if (num >= 150 && num <= 193) {
                                    set.add(field);
                                    break;
                                }
                            }else{
                                num = parseInt(val.substring(0, val.length - 2));
                                if (num >= 59 && num <= 76) {
                                    set.add(field);
                                    break;
                                }
                            }
                        }
                        break;
                    case "hcl":
                        pattern = /#[0-9a-f]{6}/g;
                        temp = pattern.exec(val)
                        if (temp != null && temp[0] == val) set.add(field);
                        break;
                    case "ecl":
                        if (val == 'amb' || val == 'blu' || val == 'brn' || val == 'gry' || val == 'grn' || val == 'hzl' || val == 'oth'){
                            set.add(field);
                        }
                        break;
                    case "pid":
                        if (val.length == 9 && !isNaN(val)) set.add(field);
                        break;
                    case "cid":
                        set.add(field);
                        break;
                }
            });
            i++;
        }
        if (set.size == 8 || (set.size == 7 && !set.has("cid"))) count++;
    }
    return count;
}