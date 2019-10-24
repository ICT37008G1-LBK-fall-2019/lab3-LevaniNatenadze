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

function reverse(arr) {
    let reverse = [];

    for (let i = 0; i < arr.length; i++) {
        reverse.unshift(arr[i]);
    }

    return reverse;
}

let rame = getNames();

console.log(reverse(rame));
