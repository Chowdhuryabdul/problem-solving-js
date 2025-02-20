const phones =[
    {name: 'samsung', price: 20000, camera : '12mp', color: 'red' },
    {name: 'oppo', price: 40000, camera : '12mp', color: 'red' },
    {name: 'HTC', price: 30000, camera : '12mp', color: 'red' },
    {name: 'Iphone', price: 120000, camera : '9mp', color: 'red' },
    {name: 'dalton', price: 10000, camera : '14mp', color: 'red' },
    {name: 'nokia', price: 50000, camera : '8mp', color: 'red' },
]

function findtheCheapestPhone(phones){
    /* validation */
    if(!Array.isArray(phones)){
        return 'provide me an array'
    }
    let cheapest = phones[0]
    for(let i of phones){
       /* this is for the price */
    if/* (i.price < cheapest.price) */
    (parseInt(i.camera) < parseInt(cheapest.camera)){ /* this is to compare the string element with the number */
        cheapest = i
    }
    }
    return cheapest
}

console.log(findtheCheapestPhone(phones))