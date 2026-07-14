
function numbers() {
    let number1 = 9;
    const number2 = 8;
    var number3 = 7;

    return { number1, number2, number3 };
}

let result = numbers();

console.log("Number1: " + result.number1);
   //console.log("Number2: "+number2)
    //console.log("Number3: "+number3)


function addOne(num){
    return num+1
}
//addOne(5)
console.log(addOne(5))

addTwo(3)
const addTwo=function(num2){
    return num2+2
}

// console.log(addTwo(3))

