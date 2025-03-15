
function checkDigitsInName(name) {
    // console.log(name)
    for(let i = 0; i < name.length; i ++){
        // console.log(name[i])
        if(typeof name[i] === 'string'){
            return 'false'
        }else if(name[i].include('number') === true){
            return 'true'
        }else{
            return 'invalid'
        }
    }
  
}

console.log(checkDigitsInName('12nf'))

