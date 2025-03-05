const heights2 = [167, 190, 120, 165, 137, 70];


/* function findtheLowest(number){
    let lowest =number [0];
    for(i of number){
        // console.log(i)
        if( i < lowest){
            lowest = i       
        }
    }
    return lowest
}

console.log(findtheLowest(heights2)) */


function findTheSmallestName(name){
    let smallest = name[0]
    for(let i = 0; i < name.length; i++){
        // console.log(i)
        if(name [i].length < smallest.length){
            smallest = name[i]
        }
    }
    return smallest
}
const heights1 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'ki'];
console.log(findTheSmallestName(heights1))