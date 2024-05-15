let colors = "red white blue";
let words = colors.split(" ");

let longestWord = "";
function longWord(){
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i].length > longestWord.length || longestWord === "") {
            longestWord = words[i];
        }
    }
    return longestWord
}
let result = longWord()
console.log(result);


