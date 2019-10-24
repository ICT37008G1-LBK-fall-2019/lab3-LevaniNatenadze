function getNames() {
    let names = [];
    let numberOfName = prompt('რამდენი სახელი: ');
    if (!Number(numberOfName)) {
        console.log('რიცხვი დაწერე !');
    }

    for (let i = 0; i < numberOfName; i++) {
        let name = prompt('სახელი: ');
        names.push(name);
    }

    return names;
}

function setFunctionNames (myArray) {
    let setLists = new Set(myArray);
    return setLists;
}

let list = getNames();
let list1 = getNames();
let twoList =  list.concat(list1);

console.log(setFunctionNames(twoList));
