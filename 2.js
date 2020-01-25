function userNameValidity (username){
  if(username[0] != username[0].toLowerCase()){
    return false}
  else if (username.length < 8 || username.length >12){
    return false
  }
  else if (username == "_" || username == "."){
    return false
  }
  return true
  
  }

console.log(userNameValidity ("john=smith"))
console.log(userNameValidity ("johnsmith26"))
console.log(userNameValidity ("JOHNSMITH"))


function passwordValidity (password){
  let int = 0;
  let simbol = '';
  if (password.length != 9){
    return false}
    else if(password != password.toUpperCase()){
      return false
    }
   for (let i=0; i < password.length; i++){
     let number ='123456789'
     let symbole = `!$%^&*@()_+|~-={}[]:";'<>?,./`
    let checkInt = number.indexOf(password[i])
    let checkSymbole = symbole.indexOf(password[i])
    if (checkInt != '-1'){
      int +=1;
    }else if(checkSymbole != '-1'){
      simbol +=1
    }
   }
   if (int == 0 || int > 1){
     return false
   }else if(simbol == 0 || simbol > 1){
     return false
   }
   return true
}
console.log(passwordValidity("j0hn5m!th"))
