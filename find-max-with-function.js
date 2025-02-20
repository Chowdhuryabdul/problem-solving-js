function findTheBiggestNumber(number){
    /* validation */
    if(!Array.isArray(number)){
        return 'give me an array'
    }
    let theBiggest = number[0];
    for(let i of number){

        /* another validation */
        if(typeof i !== 'number'){
            return 'give me all the elements in the number format'
        }
        // console.log(i)
        if(i > theBiggest){
          theBiggest = i
        }
    }
    return theBiggest
}
// const numbers = [12, 13, 15, 'daka', '6', 16, 24]
// const numbers = 'love you'
const numbers = [12, 13, 15, 6, 16, 24]
// console.log(findTheBiggestNumber(numbers))


function findTheSmallestNumber(number){
    /* validation */
    if(!Array.isArray(number)){
        return 'give me an array'
    }
    let TheSmallets = number[0]
    for(let i of number){
       
        /* another validation */
        if(typeof i !== 'number'){
            return 'provide me an array with all number elements'
        }else if(i < 0){
            return 'provide me full number'
        }
        if(i < TheSmallets){
            TheSmallets = i
        }
    }
    return TheSmallets
}

const theArray  = [12, 13, 14, 5, 4, 7]
// const theArray  = [12, 13, 14, 5, -7]
// const theArray  = [12, 13, '14', 'kutta', 5, 7]
// const theArray  = 'kutta'
console.log(findTheSmallestNumber(theArray))