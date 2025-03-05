
function calculateElectronicsBudget(laptop, tablets, mobile){
    if(typeof laptop !== 'number' || typeof tablets !== 'number' || typeof mobile !== 'number'){
        return 'provide me a number'
    }else if(laptop < 0 || tablets < 0 || mobile < 0){
        return 'give me absolute number'
    }else{
        const laptopCost = 35000;
    const tabletCost = 15000;
    const mobileCost = 25000;
    const laptopPrice = laptopCost * laptop;
    const tabletPrice = tablets * tabletCost;
    const mobilePrice = mobileCost * mobile;
    const total = laptopPrice + tabletPrice + mobilePrice;
    return total
    }
    
}

console.log(calculateElectronicsBudget(1, 1, 1))
