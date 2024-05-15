let array =[4, 3, 1, 5, 6]
function calc (array){
    array.sort((a,b) => a-b)
    let number =[]
    for(let i = 0; i < array.length; i++){
        for(let k = i + 1; k < array.length; k++ ){
            if(array[k] - array[i] === 2){
                number.push([array[i],array[k]])
            }
        }
    }
    return number
}
let result = calc(array)
console.log(...result);

