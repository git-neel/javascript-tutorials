let score = 's'

console.log(typeof score)

let valueInNumber = Number(score)// will convert string to number
console.log(typeof valueInNumber)// will always give datatype number
console.log(valueInNumber)// NaN
console.log(typeof NaN)// datatype of NaN is number thats why line 5 , 
                       //variable valueInNumber is number only even score is string
   
//if score is null then Number(score) will give O but datatype still be number
//if score is undefined then Number(score) will give NaN but datatype still be number      
//if score is string then Number(score) will give Nan but datatype still be number    
//if score is boolean then Number(score) will give either 1 if true or 0 if false, but datatype be still be number
//"23" => 23
//"asdf" => NaN


let flag = -33.023;
console.log(typeof flag)
console.log(Boolean(flag))
console.log(typeof Boolean(flag))
//true => 1 
//false => 0
//""(empty string) => 0
//"abc" => 1 (non empty string)
//null => false
//undefined => false
//any number other than 0 => true

let sum = true
console.log(String(sum))
console.log(typeof String(sum))
