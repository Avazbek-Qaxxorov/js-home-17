let word = ["abd","gcs"]

let word1 = ["ab","dgcs"]

function hasWord(word, word1) {

    word1 = word1.reduce((a,b)=>a+b),
    
    word2 = word2.reduce((c,d)=>c+d);

    if (word === word1) return true

        return false
        
        
    
}

let result = hasWord(word,word1)

console.log(result)