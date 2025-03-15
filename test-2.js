
function sendNotification(email) {
    // console.log(email)
    if(email.includes('@') === false){
        return 'invalid email'
    }
  
    if(email === 'zihad.ph@gmail.com'){
        return 'zihad.ph sent you an email from gmail.com'
    }
}

console.log(sendNotification('zihad.ph@gmail.com'))
