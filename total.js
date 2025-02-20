const products = [
    {name: 'samsung', price: 20000},
    {name: 'mokia', price: 30000},
    {name: 'htc', price: 40000},
    {name: 'dalton', price: 50000}
]

function findTheTotalCostOfAllProducts(products){
    let sum = 0
    for(let i of products){
        total = sum + i.price
       
        // console.log(i);
        
    }
    return total
}

console.log(findTheTotalCostOfAllProducts(products))