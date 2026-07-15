// let temperature =41
// if(temperature<50){
//     console.log(`${temperature} is less than 50`)
// }

// let num1=30
// let num2='30'
// if(num1===num2)
// {
//     console.log(`${num1} is equal to ${num2}`);
    
// }
// else{
//     console.log("Datatype is different");
//     console.log(` ${typeof num1} and ${typeof num2} are not same`)
// }

// let num3=30
// let num4='30'
// if(num3!==num4)
// {
//     console.log(`${num3} is equal to ${num4} regardless of datatypes`);
    
// }
// else{
//     console.log("Datatype is different");
//     console.log(` ${typeof num3} and ${typeof num4} are not same`)
// }
let previousScore1=31
 let previousScore2=33
let score1=30
let score2=30
if(score1==score2)
{
    

    if(previousScore1 != previousScore2)
    {
        let total1=score1+previousScore1;
        let total2=score2+previousScore2;
        if(total1>total2){
            console.log("Team 1  Won the match")
                                         }
        else{
            console.log("Team 2  Won the match") 
            }
    } 
}
// console.log(`Team 1 Total Score: ${total1} `)
// console.log(`Team 2 Total Score: ${total2} `)


const isLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(isLoggedIn && debitCard){
    console.log("User is allowed to shop")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In")
}



