const object ={ 
    name: "Rajib",
    testScore: 45,  
    schoolGrade: 40, 
    isFFamily : true
}  


function calculateFinalScore(obj) {
   
   if(typeof obj !== 'object'){
    return 'invalid input'
   }
   const totalScore = obj.testScore + obj.schoolGrade;
   if(totalScore < 80){
    return false
   }else{
    return true
   }
}

console.log(calculateFinalScore(object))
