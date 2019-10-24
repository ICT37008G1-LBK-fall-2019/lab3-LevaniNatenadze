

function longText(text) {
    if (text.length > 15) {
        return `${text.substring(0,10)}... `;
    }
    return text;
}

let a = longText('some very long text');

console.log(a);
