function woodQuantity(chairQuantity, tableQuantity, bedQuantity){

    /* validation */
    if(typeof chairQuantity !== 'number' || chairQuantity < 0){
        return 'provide number as char quanity and provide absolute number'
    }else if ( typeof tableQuantity !== 'number' || tableQuantity < 0){
        return 'provide number as table quanity and provide absolute number'
    }else if(typeof bedQuantity !== 'number' || bedQuantity < 0){
        return 'provide number as BED quanity and provide absolute number'
    }
    const perChairWood = 34;
    const perTableWood = 44;
    const perBedWood = 14;
    const toaltWoodForChair = perChairWood * chairQuantity;
    const toaltWoodForTable = perTableWood * tableQuantity;
    const toaltWoodForBed = perBedWood * bedQuantity;

    const totalDemandOfWood = toaltWoodForChair + toaltWoodForTable + toaltWoodForBed
    return totalDemandOfWood

}

// console.log(woodQuantity(3,'0',-2))
console.log(woodQuantity(3,0,2))