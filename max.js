const jim = 56;
const kim = 28;
const fim = 49;
if(jim > kim && jim > fim){
    console.log('jim is a big gay')
}else if(kim > jim && kim > fim){
    console.log('kim is big guy')
}else{
    console.log('fim is ultimate bigger')
}

function getMaxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return 'num1 is bigger'
    }else if(num2 > num1 && num2 > num3){
        return 'num2 is bigger than all'
    }else{
        return 'num3 is ultimiate boss'
    }
}

console.log(getMaxOfThree(12, 14, 167))