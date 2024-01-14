//Dates

let myDate = new Date();

console.log(myDate)
console.log(typeof myDate)
console.log(myDate.toDateString())//Sun Jan 14 2024
console.log(myDate.toString())//Sun Jan 14 2024 07:58:25 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString())//1/14/2024, 8:01:18 AM
console.log(myDate.toLocaleDateString())//1/14/2024
console.log(myDate.toJSON())//2024-01-14T08:01:18.350Z
console.log(myDate.toLocaleTimeString())//8:01:18 AM
console.log(myDate.toISOString())//2024-01-14T08:01:18.350Z
console.log(myDate.toUTCString())//Sun, 14 Jan 2024 08:03:02 GMT

const date = new Date(2024,1,14,2,1);
console.log(date.toDateString())
console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.toJSON())
console.log(date.toLocaleTimeString())
console.log(date.toISOString())
console.log(date.toUTCString())

const formattedDate = new Date("01-22-2034");
console.log(formattedDate.toDateString())
console.log(formattedDate.toString())
console.log(formattedDate.toLocaleString())
console.log(formattedDate.toLocaleDateString())
console.log(formattedDate.toJSON())
console.log(formattedDate.toLocaleTimeString())
console.log(formattedDate.toISOString())
console.log(formattedDate.toUTCString())

//timestamps
console.log("timestamps")
let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(typeof myTimeStamp)
console.log(formattedDate.getTime())
console.log(formattedDate.getDate())

let newDate = new Date();
console.log(newDate.getFullYear())
console.log(newDate.getDay())
console.log(newDate.getHours())

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: 'UTC'
}))