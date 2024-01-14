const num = 23
console.log(num)//23
const bal = new Number("32.0032")
console.log(typeof bal)
console.log( bal   )//[Number: 32]
console.log(typeof bal.toString())//string
console.log(bal.toFixed())
console.log(bal)
console.log(bal.toPrecision(5))//32.003

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'))
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

//************MATHS*****************/
console.log("Maths start")
console.log(typeof Math)
console.log(Math)
console.log(Math.abs("-4"))//4
console.log(Math.abs(-4))//4
console.log(Math.abs("-asdf"))//NaN
console.log(Math.round(3.5))//4
console.log(Math.floor(3.5))//3
console.log(Math.ceil(3.5))
console.log(Math.min("3312","43"))
console.log(Math.random().toFixed(2))//between 0 and 1
console.log(Math.random()*10+1)

const min = 10
const max = 20
let random = (Math.floor(Math.random()*(max-min+1))+min)
console.log(random)