
function nameInString() {
    let names = [];
    let stringSentence = prompt('რამე დაწერე');
    let numberOfNames = prompt('რამდენი სახელი: ');
    if (!Number(numberOfNames)) {
        console.log('რიცხვი დაწერე!');
    }

    for (let i = 0; i < numberOfNames; i++) {
        let name = prompt('სახელი: ');
        if (stringSentence.includes(name)) {
            names.push(name);
        }
    }

    return names;

}
