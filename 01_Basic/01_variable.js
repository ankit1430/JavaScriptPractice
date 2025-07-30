const accountId = 12345;
let accountEmail = "ankit@gmail.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState ;

// accountId = 2 ; not allowed in Js
accountEmail = "thakur@gmail.com"
accountPass = "98765"
accountCity = "Delhi"

console.log(accountId);
/*
Prefer not to use Var
bcz of issue of functiona and block scope
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState])