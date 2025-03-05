
function calculateTax(income, expenses) {
    // const monthelyIncome = 10000;
    // const monthelyExpenses = 3000;
    if(income === expenses){
        return 'invalid input'
    }else if(income < 0 || expenses < 0) {
        return 'invalid input'
    }
    const remainingAmount = income - expenses;
    const texPaid = remainingAmount * .20;
    return texPaid
}
console.log(calculateTax(10000, 3000))
