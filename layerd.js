function findTheDiscountedPrice(quantity){
    const first100TicketPrice  = 100;     
    const second100TicketPrice = 90;     
    const restOfTicketPrice = 70;
    
    if(quantity <= 100){
        const totalt = first100TicketPrice * 100;
        return totalt
    }else if (quantity <= 200){
        const first100price = 100 * first100TicketPrice;
        const remainginTicket = quantity - 100;
        const remainginTicketPrice = remainginTicket * 90;
        const totalt = first100price + remainginTicketPrice;
        return totalt;
    }else{
        const first100price = 100 * first100TicketPrice;
        const second100price = 100 * second100TicketPrice;
        const remainginTicket = quantity - 200;
        const remainginTicketPrice = remainginTicket * restOfTicketPrice;
        const totalt = first100price + second100price + remainginTicketPrice;
        return totalt;
    }
}


console.log(findTheDiscountedPrice(201))