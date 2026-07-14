function calculate(num1,num2){
    return num2
}
//console.log( calculate(5, 3))

//Rest Operators
function calculateNumbers(...numb1){
    return numb1
}
console.log( calculateNumbers (5, 3,8,6))

   function calculateValues(val1,val2,...numb1){
    return numb1
}
console.log( calculateValues (5, 3,8,6)) 
    //OBJECTS

    const person = {
        name: "Eman",
        age: 20,
    }
    function personInfo(p1)
    {
       // console.log(`Name: ${p1.name} \nQualification: ${p1.qualification}`)
}
  personInfo(person)

   function personDetails(user) {
    //console.log(`Name: ${user.name}\nAge: ${user.age}`);
}

let user = {
    name: "Amaim",
    age: 20,
}

personDetails(user)

//Array
//const array=[2,3,4,5,6,7]
function arrayInfo(array){
    return array.length
}
console.log(arrayInfo([1,4,7,0]))

function arrayThirdElement(array) {
    return array[2];
}

console.log(arrayThirdElement([1, 4, 7, 0]));