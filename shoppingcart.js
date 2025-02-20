const products = [
 {name: 'samsung', price: 20000, quantiy: 3},
 {name: 'mokia', price: 30000, quantiy: 4},
 {name: 'htc', price: 40000, quantiy: 1},
 {name: 'dalton', price: 50000, quantiy: 8},
]

function findTheTotalCostOfProduct(products){
    let total = 0;
    for(let i of products){
        // console.log(i)
        const costOfTheseProducts = i.price * i.quantiy;
        total = total + costOfTheseProducts
    }
    return total
}
console.log(findTheTotalCostOfProduct(products))