//primitive data types below
//types: string, number, boolean, null, undefined, symbol, bigint

const id = Symbol('1231')
const id2 = Symbol('1231')
console.log(id)
console.log(typeof id)
console.log(id === id2)
const bigNum = 2**1080//infinity
const bigNum2 = 234424242424235214312525312412412423424n
console.log(bigNum)
console.log(bigNum2)
console.log(typeof bigNum)
console.log(typeof bigNum2)
//Reference(non-primitive)

//Array, Objects, Functions

const nayak = ["spiderman","batman","ironman"]

const myObj = {
    name: "neel",
    age: 34
}
console.log(nayak)
console.log(myObj)

let myFunc = function(){
    console.log("hello world")
}
console.log(myFunc)
console.log(typeof myFunc)
console.log(myFunc.apply)