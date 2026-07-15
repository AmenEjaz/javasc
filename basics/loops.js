
//For Loop
for(let index=0; index<10; index++)
{
    console.log("*")   ;
}
 // Pattern
 console.log("Pattern  ");
 
let pattern = "";

for (let i = 1; i <= 5; i++) {
    pattern += "*";
    console.log(pattern);
}
// Table Printing
console.log("Table");

for(let a=1; a<=5; a++)
{
    let b=5;
    console.log(` ${a} * ${b} = `+ a*b);
}


for(let ind=1; ind<=5; ind++)
{
    let num=ind;
    if(num==5)
        {
        console.log(" 5 is greatest");
    }
    //nested loops
}
for(let i=0; i<5; i++){
    for(let j=0; j<i; j++)
    {
        
        //console.log(` i = ${i} and j = ${j}`);
        console.log(` ${i} * ${j} = ` + i*j)
    }
}
//Array
let arr=[1,2,3,4,5]
for(let i=0; i<arr.length; i++)
    {
    console.log(arr[i]);
    
}
let rows = 5;
//Triangle using nested loop
for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}
console.log(" ")
for (let i = 5; i >= 0; i--) {
    let pattern = "";

    for (let j =1; j<i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}




