const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let sum = 0
for(let i of phones){
    // sum += i.price;
    // console.log(phones.length)
    sum = sum + i.price
    // average  = sum / phones.length /* this is correct here in this way but i can not declair here it as variable */   
}
const average = sum / phones.length;
return average

}

// console.log(findAveragePhonePrice(phones))


const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function findTheTotalMonthelySalary(employees){
    let sum = 0
    for(let i of employees){
        const salaryIncrement = i.experience * i.increment;
        const total = i.starting + salaryIncrement
       sum = sum + total
    }
    const mnthyPaid = sum / 12;
   return mnthyPaid
}
console.log(findTheTotalMonthelySalary(employees))










