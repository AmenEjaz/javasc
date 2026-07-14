function greeting(name){
    console.log(`Assalam-o-Alaikum ${name}`)
}
greeting("Amen")

 function addNumbers(num1,num2){
    return num1 + num2
 }
 console.log("Sum :" + addNumbers(5, 3))

 //Result with no arguments
 function subtractNumbers(num3,num4){
    return num3 - num4
 }
    console.log("Subtraction :" + subtractNumbers())  
    
 //Result with one argument as number and other as null
  function product(num5,num6){
        return num5 * num6
     }
        console.log("Product :" + product(5,null))

        function divide(num5,num6){
        return num5 / num6
     }
        console.log("Division :" + divide(5))
    
function remainder(num5=50,num6=9){
    return num5 % num6
}
console.log("Remainder :" + remainder())

//Code after return statement will not be executed. It's unreachable code

function result(num7,num8){
    return num7 + num8
    console.log("This code will not be executed")
}
result(9, 8)

function loginUser(username){
    return `${username} just logged in` 
}
console.log(loginUser("Amen"))

function loginUserMessage(username){
    if(!username
    ){
        return "Please provide a username"
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()) 

//Default parameters
function loginMessage(user = "Eman"){
    if(!user)
        {
        return "Please provide a username"
    }
    return `${user} just logged in`
}
console.log(loginMessage()) 

//Over riding the default parameter
function loginMessage(user = "Eman"){
    if(!user)
        {
        return "Please provide a username"
    }
    return `${user} just logged in`
}  

console.log(loginMessage("Amen"))              