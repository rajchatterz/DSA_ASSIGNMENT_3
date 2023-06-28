let digits = [9]

function arrayToNum(digits){
    return parseInt(digits.join('').replace(/,/g,''))
}
let number = arrayToNum(digits)+1
function numToArray(number){
    return Array.from(String(number),Number)
}
let modifiedDig = numToArray(number)
return modifiedDig

