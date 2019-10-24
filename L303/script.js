function converter (val) {
    let money = val.substring(1, val.length);
    // console.log(money); //რიცხვი

    if (val.includes('$')) {
        return (money * 2.6).toFixed(1)
    } else if (val.includes('L')) {
        return (money / 2.6).toFixed(1);
    } else {
        console.log('rame');
    }

}

// console.log(converter('L30'));
