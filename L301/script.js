let badWords = ["რეკლამა", "მარკეტინგი", "ვირუსი"];


function badWordWarning(sentence, words) {
    for (let w of words) {
        if (sentence.indexOf(w) !== -1) {
            return 'აკრძალულია';
        }
    }
    return 'არ არის აკრძალული';
}

let a = badWordWarning('ცუდია', badWords);

console.log(a);
