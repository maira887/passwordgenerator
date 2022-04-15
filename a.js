// var range = '1234567890'
// password = ''
// function generatepassword() {
//     for (index = 1; index <=5; index++) {
//     var generatepass = Math.floor(Math.random()*range.length)
//     password += generatepassword
// }
//     return password;
// }
// console.log(generatepassword());
function generatepassword(){
var passwordlength=prompt("enter your password length")
var password="";
for(var i=0;i<= passwordlength; i++){
var randomnumber =Math.floor(Math.random()*10);
password+= randomnumber
}
    // document.getElementById("password").value=password
    console.log(password);
}
generatepassword()