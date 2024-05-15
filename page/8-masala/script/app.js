
function isAnagram(str, word) {

    str = str.replace(/\s/g, '');
    word = word.replace(/\s/g, '');

    if (str.length !== word.length) {
        return false;
    }

    let sortedStr = str.split('').sort().join('');
    let sortedWord = word.split('').sort().join('');

    return sortedStr === sortedWord;
}
console.log(isAnagram("listen", "silent"));