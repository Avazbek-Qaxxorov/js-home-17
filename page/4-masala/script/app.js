function lengthLastWord() {

    return words[words.length - 1].length;

}
let text = "Assalomu aleyum"

let words = text.trim().split(" ");

let res = lengthLastWord()  

console.log(`Ohirgi so'zni: ${words[words.length -1]} va uning uzunligi: ${res} ga teng`)