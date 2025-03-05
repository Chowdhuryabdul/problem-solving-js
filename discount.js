function TotalCostOfTIcket(quantity){
    const first100Ticket = 100
    const second100Ticket = 90
    const restOfTicket = 70;

    if(quantity <= 100){
        const total = quantity * first100Ticket;
        return total
    }else if (quantity <= 200){
        const total = quantity * 90
        return total  
    }else{
        const total = quantity * 70;
        return total
    }
   
}

console.log(TotalCostOfTIcket(201))