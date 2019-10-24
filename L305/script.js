
function studentNames() {
    let names = [];
    let number = prompt('რამდენი სახელი: ');

    if (!Number(number)) {
        console.log('შეიყვანე რიცხვი');
    }

    for (let i = 0; i < number; i++) {
        let name = prompt('სახელი: ');
        names.push(name)
    }

    return names;

}

// studentNames().sort(); console.log
