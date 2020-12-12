main()

function main() {
    const fname = "/home/dycancel/advent-of-code-2020/7/input.txt";
    const fs = require('fs');

    fs.readFile(fname, (err, data) => {
        if (err) throw err;
        let bags = shinyGoldBag(data.toString().split("\n"));
        console.log("Part 1: " + idk(bags) + "\n");
        console.log("Part 2: " + recursiveCounter(bags, "shinygold") + "\n");
    });
}

function shinyGoldBag(data){
    let bags = {};
    data.forEach(function(str){
        let color, number;
        let temp = str.split(" ");
        let bag = temp[0] + temp[1];
        let children = {};
        for (let i = 4; i < temp.length; i += 4){
            if (temp[i] == "no") break;
            children[temp[i+1] + temp[i+2]] = temp[i];
        }
        bags[bag] = children;
    });
    return bags;
}

function idk(bags){
    let holdsShiny = new Set();
    for (const [key, value] of Object.entries(bags)){
        if (value["shinygold"]) holdsShiny.add(key);
    }

    let bool = true;
    while (bool === true){
        bool = false;
        for (const [key, value] of Object.entries(bags)){
            Object.keys(value).forEach(function (bag){
                if (holdsShiny.has(bag) && !holdsShiny.has(key)){
                    bool = true;
                    holdsShiny.add(key);
                }
            });
        }
    }
    return holdsShiny.size;
}

function recursiveCounter(bags, bag){
    let children = bags[bag], counter = 0;
    if (Object.keys(children).length === 0 && children.constructor === Object){
        return 0;
    }
    for (const [key, value] of Object.entries(children)) {
        counter += parseInt(value) + recursiveCounter(bags, key);
    }
    return counter;
}