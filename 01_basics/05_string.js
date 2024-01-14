const naam = "luv"
const age = 23
console.log(naam,age)//luv 23
console.log(naam+age)//luv23
console.log(`my name is ${naam} and my age is ${age}`)

const gameName = new String("lakhmani")
console.log(gameName)//[String: 'lakhmani']
console.log(gameName.charAt(2))
console.log(gameName.__proto__)//{}
console.log(gameName.toUpperCase())
console.log(gameName[2])
console.log(gameName.indexOf('k'))

let str = "slice-me"
console.log(str.slice(0,4))//slic
console.log(str)//slice-me
console.log(str.slice(4,6))

const url = "http://www.neelabh.com/webpage-blog$20howToGainMoney"
console.log(url.replace('$20','-'))
console.log(url.split('-'))