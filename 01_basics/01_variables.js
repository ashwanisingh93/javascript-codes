const accountId = 234438
let accountEmail = "abc@gmail.com"
var accountPassword = "12345" 
accountCity = "Gorakhpur"
let accountState;

// this will give error but const cannot be changed 
//accountId = 2434

/*
prefer not to use var 
because of the issue of block scope and functional scope
*/

accountEmail = "dljdg4"
accountPassword = "5385"
accountCity = "jlkfsdfih"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

