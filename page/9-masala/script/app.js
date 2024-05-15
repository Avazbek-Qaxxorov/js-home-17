function findUniq(arr) {
    return arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );

}
let arr = findUniq([ 0, 0, 3, 0, 0 ])
let result = findUniq(arr)
console.log(result);