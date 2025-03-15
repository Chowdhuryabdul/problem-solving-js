let timeOfEachApplicant = [3, 5, 7, 11, 6]
const ishratSerialNumber = 10;

function  waitingTime(waitingTimes  , serialNumber) {
    if( !Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'invalid input'
    }
   let sum = 0;
   for(i of waitingTimes){
     sum = sum + i;
    }
    const averageTimePerApplicant = sum / i;
    const totalInterviewTime = averageTimePerApplicant * serialNumber;
    const waitingTimeForIshrat = totalInterviewTime - sum;
    return waitingTimeForIshrat
    
}

console.log(waitingTime(timeOfEachApplicant, ishratSerialNumber))
