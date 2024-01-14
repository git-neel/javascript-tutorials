{
    const accountId = 1224
    console.log(accountId)
   // accountId = "s" // assignment to constant not allowed
}


{
    let accountId = 323
    console.log(accountId) // here account 
}
var alphabet ='q'
let email = 'random@gmail.com';
var accountId = "hmm" //will be overided by accountId defined in scope 
{var accountId = "abc"}// even though accountId is defined in scope it will overried the above accountId
{
    email = "changed@gmail.com"
}
withOutDataTypeDeclaration =2;
let withoutdata
console.table([accountId,alphabet,email,withOutDataTypeDeclaration,withoutdata])