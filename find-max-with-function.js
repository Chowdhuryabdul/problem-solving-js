function findTheBiggestNumber(number){
    const theBiggest = [0];
    for(let i of number){
        // console.log(i)
        if(theBiggest > i){
            theBiggest = i
        }
    }
    return theBiggest
}
const numbers = [12, 13, 15, 16]
console.log(findTheBiggestNumber(numbers))