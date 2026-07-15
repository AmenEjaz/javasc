const name='Amen'
const age=null
if(name){
    console.log(name.length)
}
if(age){
    console.log(`Age : ${age} `)
}
else{
    console.log("Age is not mentioned")
}
//Object
const obj={}
if(Object.keys(obj).length!=0)
{
    console.log("Object is present")
}
else{
    console.log("No object")
}

//Nullish Coalescing Operator
let value;
value=5??2
console.log(`${value}`)
 value2=2??5
 console.log(`${value2}`)

value3=null??2
console.log(`${value3}`)
 value4=undefined??5
 console.log(`${value4}`)
 value5=undefined??null
console.log(`${value5}`)
 value6=2??undefined
 console.log(`${value6}`)
 value7=null??undefined??8
console.log(`${value7}`);

//Terniary Operator


 let _age = 12;

(_age > 10 && _age < 18)
    ? console.log("Teenager")
    : console.log("Not a teenager");