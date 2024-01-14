//stack : primitive type uses stack memory that mean copy of value is given
//Heap: non primitive type use heap memory that mean copy of referene is given

let myName = "Robert"

let yourName = myName
console.table([myName,yourName])
yourName = "Neel"
//coyp by value
console.table([myName,yourName])

let user1 = {
    email: "asdf@dgms.com",
    id: 1   
}

let user2 = user1;
console.table([user1,user2])

user2.email="23423@34asdf.com"
//copy by reference both email of user1 and user2 are changed as user2 is assign the refrence of user1
console.table([user1,user2])
